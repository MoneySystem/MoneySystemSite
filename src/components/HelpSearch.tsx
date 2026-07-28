"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

type SearchItem = {
  title: string;
  summary: string;
  href: string;
  category: string;
  keywords: string[];
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function HelpSearch({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const normalizedQuery = normalize(deferredQuery.trim());
    if (normalizedQuery.length < 2) return [];

    return items
      .filter((item) =>
        normalize(
          `${item.title} ${item.summary} ${item.category} ${item.keywords.join(" ")}`,
        ).includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [deferredQuery, items]);

  const hasQuery = deferredQuery.trim().length >= 2;

  return (
    <div className="help-search">
      <label htmlFor="help-query">Buscar na Central de Ajuda</label>
      <div className="help-search__field">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          id="help-query"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Descreva sua dúvida..."
          autoComplete="off"
        />
      </div>

      {hasQuery ? (
        <div className="help-search__results" aria-live="polite">
          {results.length > 0 ? (
            <>
              <p>{results.length} resultado(s)</p>
              <ul>
                {results.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span>{item.title}</span>
                      <small>{item.category}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>
              Nenhum artigo encontrado. Tente outra palavra ou fale com nosso
              suporte humano.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
