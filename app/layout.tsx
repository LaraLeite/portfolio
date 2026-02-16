import "./globals.css";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import Background from "./background";


const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});


export const metadata = {
  title: "Lara Leite — Portefólio",
  description: "UX Designer",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
       className="nav-animated-border rounded-full border border-transparent px-3 py-2 text-sm text-zinc-300 hover:border-white/10 hover:text-zinc-50"    >
      {label}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className={`${sourceSans.className} min-h-screen bg-zinc-950 text-zinc-50`}>
         <Background />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold">
              Lara Leite
            </Link>

            <nav className="flex gap-2">
              <NavLink href="/" label="Portefólio" />
              <NavLink href="/about" label="About" />
              <NavLink href="/travel" label="Travel" />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl justify-between px-4 py-8 text-sm text-zinc-400">
            <span>© {new Date().getFullYear()} Lara Leite</span>
            <span>UX Designer</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
