
import "./globals.css";
import { Yaldevi } from "next/font/google";

const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Service Temporarily Unavailable",
  description: "The service is temporarily unavailable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${yaldevi.className} min-h-screen bg-[#111111] text-white`}>
        <main className="min-h-screen w-full bg-[#111111] flex items-start justify-center px-6 py-16 md:py-20">
          <section className="w-full max-w-3xl">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-800 pb-10">
              <p className="text-xs tracking-[0.2em] text-neutral-400">
                SERVER STATUS
              </p>

              <p className="text-xs text-amber-400">
                SERVICE UNAVAILABLE
              </p>
            </div>

            <div className="py-16 md:py-20">
              <h1 className="text-7xl md:text-8xl font-medium tracking-tight mb-5">
                503
              </h1>

              <h2 className="text-xl md:text-2xl mb-5">
                Service Temporarily Unavailable
              </h2>

              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-neutral-400">
                The server is temporarily unable to handle this
                request. This may be due to maintenance or a
                temporary overload. Please try again later.
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <p className="text-xs tracking-wider text-neutral-500">
                HTTP ERROR 503 · PLEASE TRY AGAIN LATER
              </p>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}

