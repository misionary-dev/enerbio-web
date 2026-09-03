import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-enerbio-verde-acento px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">{children}</span>;
}