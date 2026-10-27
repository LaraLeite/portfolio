import "./globals.css";
import Link from "next/link";
import { Yaldevi } from "next/font/google";
import Background from "./background";
import ThemeToggle from "./theme-toggle";


const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Lara Leite — Portefólio",
  description: "UX Designer",
};


function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="nav-animated-border rounded-full border border-foreground/20 px-6 py-4 text-sm text-foreground/70 transition-colors hover:border-foreground/50 hover:text-foreground"
    >
      {label}
    </Link>
  );
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className={`${yaldevi.className} min-h-screen bg-background text-foreground`}>
         <Background />  
         <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur"> 
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold">
              Lara Leite
            </Link>

            <nav className="flex gap-2">
              <NavLink href="/" label="Portefólio" />
              <NavLink href="/about" label="About" />
              <NavLink href="/travel" label="Travel" />
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t border-foreground/10">
          <div className="mx-auto flex max-w-5xl justify-between px-4 py-8 text-sm text-foreground/60">
            <span>© {new Date().getFullYear()} Lara Leite</span>
            <span>UX Designer</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
