"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/Logo";
import { NAV_LINKS, bookACallHref } from "@/lib/constants";

function Logo() {
  return (
    <a href="#" aria-label="autari" className="flex items-center pl-1">
      <BrandLogo markClassName="h-7 w-7" />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "glass-strong"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 transition-colors hover:text-fga"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button href={bookACallHref()} className="px-5 py-2.5 text-[11px]">
          Book a call
        </Button>
      </div>
    </nav>
  );
}
