import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products/materialflow", label: "MaterialFlow" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="wrap flex items-center justify-between py-2">
        <Link
          href="/"
          className="flex items-center"
          aria-label="DB Logical Solutions home"
        >
          <Image
            src="/images/db-logo-fixed.svg"
            alt="DB Logical Solutions"
            width={365}
            height={310}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-light">
            Discuss a project
          </Link>
        </nav>

        <MobileNav links={links} />
      </div>
    </header>
  );
}
