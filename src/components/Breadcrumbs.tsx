import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Caminho da página">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
