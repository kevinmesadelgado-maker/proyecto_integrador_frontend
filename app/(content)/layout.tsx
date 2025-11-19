import Footer from "@/components/layout/Footer";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
