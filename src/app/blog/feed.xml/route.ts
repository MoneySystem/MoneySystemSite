import { blogPosts } from "@/content/blog";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rssDate(date: string) {
  return new Date(`${date}T12:00:00-03:00`).toUTCString();
}

export function GET() {
  const feedUrl = absoluteUrl("/blog/feed.xml");
  const blogUrl = absoluteUrl("/blog");
  const lastUpdated = blogPosts.reduce(
    (latest, post) => {
      const current = post.updatedAt ?? post.publishedAt;
      return current > latest ? current : latest;
    },
    blogPosts[0]?.updatedAt ?? blogPosts[0]?.publishedAt ?? "2026-07-28",
  );
  const items = blogPosts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      const categories = post.categories
        .map((category) => `<category>${escapeXml(category)}</category>`)
        .join("");

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `<pubDate>${rssDate(post.publishedAt)}</pubDate>`,
        `<dc:creator>${escapeXml(post.author)}</dc:creator>`,
        `<description>${escapeXml(post.excerpt)}</description>`,
        categories,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "<channel>",
    `<title>${escapeXml(`${SITE_NAME} — ERP e gestão empresarial`)}</title>`,
    `<link>${escapeXml(blogUrl)}</link>`,
    "<description>Guias claros sobre ERP, gestão empresarial, financeiro, estoque, emissão fiscal e ordens de serviço.</description>",
    "<language>pt-BR</language>",
    `<lastBuildDate>${rssDate(lastUpdated)}</lastBuildDate>`,
    `<atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
