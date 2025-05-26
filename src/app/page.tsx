import { Main, Footer } from "@/components";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:pb-10 font-[family-name:var(--font-geist-sans)]">
      <Main />
      <Footer />
    </div>
  );
}
