export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">Powered with Supabase and Nextjs</h1>
      <div className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Hero
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
