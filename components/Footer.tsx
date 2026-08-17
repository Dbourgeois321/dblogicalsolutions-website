import Link from "next/link";
import { Code2, BriefcaseBusiness, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              DB Logical Solutions
            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Practical technology solutions for real business problems.
              Software, automation, data, manufacturing technology, and
              purpose-built computer systems.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
              >
                <BriefcaseBusiness size={19} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
              >
                <Code2 size={19} />
              </a>

              <a
                href="mailto:info@dblogicalsolutions.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Data & Automation
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white">
                  Manufacturing Solutions
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white">
                  Technology Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Products</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/products/materialflow"
                  className="transition-colors hover:text-blue-400"
                >
                  MaterialFlow
                </Link>
              </li>
            </ul>

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-400">
              In Development
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DB Logical Solutions. All rights
            reserved.
          </p>

          <p>
            Software • Automation • Data • Manufacturing Technology
          </p>
        </div>
      </div>
    </footer>
  );
}