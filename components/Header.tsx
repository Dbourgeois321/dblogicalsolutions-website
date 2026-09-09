import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="DB Logical Solutions home">
          <Image
            src="/icon.png"
            alt="DB Logical Solutions logo"
            width={44}
            height={44}
            priority
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight">DB Logical Solutions</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400">
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/manufacturing"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            Manufacturing
          </Link>

          <Link
            href="/technology"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            Technology
          </Link>

          <Link
            href="/#materialflow"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Discuss Your Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
