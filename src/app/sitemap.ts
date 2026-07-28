import type { MetadataRoute } from "next";

import { blogPosts } from "@/content/blog";
import {
  helpArticles,
  helpCategories,
  helpErrors,
} from "@/content/help";
import { resources } from "@/content/resources";
import { solutions } from "@/content/solutions";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date("2026-07-28T12:00:00-03:00");

  return [
    {
      url: absoluteUrl("/"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/erp"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/recursos"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...resources.map((resource) => ({
      url: absoluteUrl(`/recursos/${resource.slug}`),
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/solucoes"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/solucoes/automotivo"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...solutions.map((solution) => ({
      url: absoluteUrl(`/solucoes/${solution.slug}`),
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/blog"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T12:00:00-03:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: absoluteUrl("/ajuda"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/ajuda/erros"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...helpCategories
      .filter((category) =>
        helpArticles.some((article) => article.category === category.slug),
      )
      .map((category) => ({
        url: absoluteUrl(`/ajuda/categoria/${category.slug}`),
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ...helpArticles.map((article) => ({
      url: absoluteUrl(`/ajuda/${article.slug}`),
      lastModified: new Date(`${article.updatedAt}T12:00:00-03:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...helpErrors.map((article) => ({
      url: absoluteUrl(`/ajuda/erros/${article.slug}`),
      lastModified: new Date(`${article.updatedAt}T12:00:00-03:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: absoluteUrl("/empresa"),
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/autores/ney-moraes"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/termos"),
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
