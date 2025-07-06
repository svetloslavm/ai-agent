import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col gap-2 items-center m-auto">
      <h1 className="text-3xl sm:text-4xl text-center font-bold px-4 text-foreground/80">
        404 <br />
        Page Not Found
      </h1>
      <p className="text-sm sm:text-lg text-center mb-8 px-4 text-foreground/50">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="flex items-center text-blue-500 underline">
        Go back to Home
      </Link>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </main>
  );
}
