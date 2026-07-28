import {
  absoluteUrl,
  NAVIGATION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export type JsonLdNode = Record<string, unknown>;

export type SchemaBreadcrumb = {
  name: string;
  path?: string;
};

export type SchemaFaq = {
  question: string;
  answer: string;
};

export const ORGANIZATION_ID = absoluteUrl("/#organization");
export const WEBSITE_ID = absoluteUrl("/#website");
export const SOFTWARE_ID = absoluteUrl("/#software");

export function combineSchemaGraphs(...schemas: JsonLdNode[]): JsonLdNode {
  const graph = schemas.flatMap((schema) => {
    const nested = schema["@graph"];
    if (Array.isArray(nested)) return nested as JsonLdNode[];

    const node = { ...schema };
    delete node["@context"];
    return [node];
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function webPageId(path: string) {
  return `${absoluteUrl(path)}#webpage`;
}

export function articleId(path: string) {
  return `${absoluteUrl(path)}#article`;
}

export function breadcrumbId(path: string) {
  return `${absoluteUrl(path)}#breadcrumb`;
}

export function personId(slug: string) {
  return absoluteUrl(`/autores/${slug}#person`);
}

export function siteEntityGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": absoluteUrl("/#logo"),
          url: absoluteUrl("/logo.svg"),
          contentUrl: absoluteUrl("/logo.svg"),
          caption: "MoneySystem",
        },
        description:
          "Empresa brasileira responsável pelo MoneySystem, um ERP online e sistema de gestão empresarial.",
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: `+${WHATSAPP_NUMBER}`,
          availableLanguage: "pt-BR",
          areaServed: "BR",
          url: `https://wa.me/${WHATSAPP_NUMBER}`,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Conteúdo sobre ERP, gestão empresarial e uso do MoneySystem.",
        inLanguage: "pt-BR",
        publisher: { "@id": ORGANIZATION_ID },
        hasPart: { "@id": absoluteUrl("/#navigation") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#navigation"),
        name: "Navegação principal do MoneySystem",
        itemListElement: NAVIGATION.map((item, index) => ({
          "@type": "SiteNavigationElement",
          position: index + 1,
          name: item.label,
          url: absoluteUrl(item.href),
        })),
      },
    ],
  };
}

export function breadcrumbSchema(
  path: string,
  items: SchemaBreadcrumb[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function faqSchema(
  path: string,
  faqs: SchemaFaq[],
): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    isPartOf: { "@id": webPageId(path) },
    inLanguage: "pt-BR",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function collectionPageSchema({
  path,
  name,
  description,
  items,
  breadcrumbs,
}: {
  path: string;
  name: string;
  description: string;
  items: Array<{ name: string; path: string; description?: string }>;
  breadcrumbs?: SchemaBreadcrumb[];
}): JsonLdNode {
  const graph: JsonLdNode[] = [
    {
      "@type": "CollectionPage",
      "@id": webPageId(path),
      url: absoluteUrl(path),
      name,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORGANIZATION_ID },
      ...(breadcrumbs
        ? { breadcrumb: { "@id": breadcrumbId(path) } }
        : {}),
      mainEntity: { "@id": `${absoluteUrl(path)}#items` },
    },
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(path)}#items`,
      name,
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(item.path),
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
      })),
    },
  ];

  if (breadcrumbs) {
    graph.push(breadcrumbSchema(path, breadcrumbs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function webPageSchema({
  path,
  name,
  description,
  breadcrumbs,
  aboutId = SOFTWARE_ID,
  pageType = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: SchemaBreadcrumb[];
  aboutId?: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "ProfilePage";
}): JsonLdNode {
  const hasBreadcrumbs = Boolean(breadcrumbs?.length);
  const graph: JsonLdNode[] = [
    {
      "@type": pageType,
      "@id": webPageId(path),
      url: absoluteUrl(path),
      name,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORGANIZATION_ID },
      ...(hasBreadcrumbs
        ? { breadcrumb: { "@id": breadcrumbId(path) } }
        : {}),
      about: { "@id": aboutId },
    },
  ];

  if (hasBreadcrumbs && breadcrumbs) {
    graph.push(breadcrumbSchema(path, breadcrumbs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function personProfileSchema({
  path,
  slug,
  name,
  description,
  breadcrumbs,
}: {
  path: string;
  slug: string;
  name: string;
  description: string;
  breadcrumbs: SchemaBreadcrumb[];
}): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": webPageId(path),
        url: absoluteUrl(path),
        name,
        description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": breadcrumbId(path) },
        mainEntity: { "@id": personId(slug) },
      },
      {
        "@type": "Person",
        "@id": personId(slug),
        name,
        description,
        url: absoluteUrl(path),
      },
      breadcrumbSchema(path, breadcrumbs),
    ],
  };
}

export function articleSchema({
  path,
  type,
  headline,
  description,
  datePublished,
  dateModified,
  author,
  breadcrumbs,
  keywords,
  hasPartIds,
}: {
  path: string;
  type: "BlogPosting" | "TechArticle" | "Article";
  headline: string;
  description: string;
  datePublished?: string;
  dateModified: string;
  author:
    | { type: "Person"; slug: string; name: string }
    | { type: "Organization" };
  breadcrumbs: SchemaBreadcrumb[];
  keywords?: string[];
  hasPartIds?: string[];
}): JsonLdNode {
  const articleAuthor =
    author.type === "Person"
      ? {
          "@type": "Person",
          "@id": personId(author.slug),
          name: author.name,
          url: absoluteUrl(`/autores/${author.slug}`),
        }
      : { "@id": ORGANIZATION_ID };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webPageId(path),
        url: absoluteUrl(path),
        name: headline,
        description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": breadcrumbId(path) },
        mainEntity: { "@id": articleId(path) },
      },
      {
        "@type": type,
        "@id": articleId(path),
        headline,
        description,
        inLanguage: "pt-BR",
        mainEntityOfPage: { "@id": webPageId(path) },
        author: articleAuthor,
        publisher: { "@id": ORGANIZATION_ID },
        ...(datePublished ? { datePublished } : {}),
        dateModified,
        ...(keywords?.length ? { keywords } : {}),
        ...(hasPartIds?.length
          ? {
              hasPart: hasPartIds.map((id) => ({ "@id": id })),
            }
          : {}),
      },
      breadcrumbSchema(path, breadcrumbs),
    ],
  };
}

export function servicePageSchema({
  path,
  name,
  description,
  serviceType,
  audience,
  breadcrumbs,
  faqs,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  audience: string[];
  breadcrumbs: SchemaBreadcrumb[];
  faqs?: SchemaFaq[];
}): JsonLdNode {
  const graph: JsonLdNode[] = [
    {
      "@type": "WebPage",
      "@id": webPageId(path),
      url: absoluteUrl(path),
      name,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": breadcrumbId(path) },
      about: { "@id": `${absoluteUrl(path)}#service` },
      mainEntity: { "@id": `${absoluteUrl(path)}#service` },
    },
    {
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name,
      description,
      serviceType,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      audience: audience.map((name) => ({
        "@type": "BusinessAudience",
        name,
      })),
      url: absoluteUrl(path),
    },
    breadcrumbSchema(path, breadcrumbs),
  ];

  if (faqs?.length) {
    graph.push(faqSchema(path, faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
