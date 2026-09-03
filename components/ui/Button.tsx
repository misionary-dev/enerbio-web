import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "accent";
  className?: string;
};

const variants = {
  primary: "bg-enerbio-verde-oscuro text-white hover:bg-enerbio-verde-acento",
  outline: "border-2 border-white text-white hover:bg-white hover:text-enerbio-verde-oscuro",
  accent: "bg-enerbio-verde-acento text-enerbio-verde-oscuro hover:bg-enerbio-verde-claro",
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3.5 font-semibold transition-colors ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}