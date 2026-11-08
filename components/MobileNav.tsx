"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="min-h-11 rounded-sm border border-white/30 px-4 text-sm font-semibold text-white hover:bg-white/10"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-ink px-5 pb-5 pt-2"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-light mt-5 w-full"
          >
            Discuss a project
          </Link>
        </nav>
      )}
    </div>
  );
}
