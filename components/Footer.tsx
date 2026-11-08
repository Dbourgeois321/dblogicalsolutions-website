import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="DB Logical Solutions home"
            >
              <Image
                src="/images/db-logo-fixed.svg"
                alt="DB Logical Solutions"
                width={365}
                height={310}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Software for purchasing, receiving, and inventory at small
              manufacturers.
            </p>
          </div>

          <div>
            <h2 className="display text-xl text-white">Pages</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products/materialflow"
                  className="hover:text-white"
                >
                  MaterialFlow
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="display text-xl text-white">Good to know</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/kidney-health" className="hover:text-white">
                  Kidney health basics
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="display text-xl text-white">Reach me</h2>
            <p className="mt-4 text-sm leading-6">
              <a
                href="mailto:david@dblogicalsolutions.com"
                className="font-medium text-white underline decoration-brand-bright decoration-2 underline-offset-4 hover:decoration-white"
              >
                david@dblogicalsolutions.com
              </a>
              <br />
              Based in Massachusetts
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} DB Logical Solutions
        </p>
      </div>
    </footer>
  );
}
