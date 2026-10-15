import { HeaderPY } from "@/components/layout/HeaderPY";
import { FooterPY } from "@/components/layout/FooterPY";

export default function PyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderPY />
      <div>{children}</div>
      <FooterPY />
    </>
  );
}
