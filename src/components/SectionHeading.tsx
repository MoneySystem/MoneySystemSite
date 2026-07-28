import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align}${
        inverse ? " section-heading--inverse" : ""
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <div className="section-heading__description">{description}</div> : null}
    </div>
  );
}
