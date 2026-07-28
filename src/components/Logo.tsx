import Image from "next/image";

type LogoProps = {
  href?: string | null;
  priority?: boolean;
  className?: string;
};

export function Logo({
  href = "/",
  priority = false,
  className = "",
}: LogoProps) {
  const image = (
    <Image
      src="/logo.svg"
      alt="MoneySystem"
      width={159}
      height={55}
      preload={priority}
    />
  );

  if (href === null) {
    return (
      <span className={`brand-logo ${className}`.trim()} aria-label="MoneySystem">
        {image}
      </span>
    );
  }

  return (
    <a
      className={`brand-logo ${className}`.trim()}
      href={href}
      aria-label="MoneySystem — página inicial"
    >
      {image}
    </a>
  );
}
