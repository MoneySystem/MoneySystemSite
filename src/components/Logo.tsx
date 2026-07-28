import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  priority?: boolean;
  className?: string;
};

export function Logo({
  href = "/",
  priority = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      className={`brand-logo ${className}`.trim()}
      href={href}
      aria-label="MoneySystem — página inicial"
    >
      <Image
        src="/logo.svg"
        alt="MoneySystem"
        width={159}
        height={55}
        preload={priority}
      />
    </Link>
  );
}
