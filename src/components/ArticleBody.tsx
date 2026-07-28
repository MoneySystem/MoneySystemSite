import type { ContentSection } from "@/content/types";

export function ArticleBody({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="article-body">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.numbered ? (
            <ol>
              {section.numbered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
          {section.note ? (
            <aside className="article-note">
              <span>Importante</span>
              <p>{section.note}</p>
            </aside>
          ) : null}
        </section>
      ))}
    </div>
  );
}
