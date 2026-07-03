"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./Ornaments";

const links = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Occasions" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-maroon-900/85 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.9)] gold-border border-x-0 border-t-0"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full gold-surface font-display text-lg font-bold">
            श्री
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-wide text-gold-300 sm:text-base">
              {site.name}
            </span>
            <span className="block font-serif text-[11px] tracking-[0.3em] text-cream/60 uppercase">
              Lonar
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-serif text-lg text-cream/80 transition-colors hover:text-gold-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full gold-surface px-5 py-2 font-sans text-sm font-semibold transition-transform hover:scale-105 sm:flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full gold-border text-gold-300 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-maroon-800/95 px-6 lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-gold-500/15 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-lg text-cream/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full gold-surface px-5 py-3 font-sans font-semibold"
              >
                <Icon name="phone" className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
