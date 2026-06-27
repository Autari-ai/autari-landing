"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

function Logo() {
  return (
    <a href="#" aria-label="autari" className="flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo_light.png" alt="autari" className="h-8 w-auto" />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-bark/70 transition-colors hover:text-bark"
            >
              {link.label}
            </a>
          ))}
          <Button href="#survey" className="text-[11px] px-5 py-2.5">
            Reserve a spot
          </Button>
        </div>
        <Button href="#survey" className="text-[11px] px-5 py-2.5 md:hidden">
          Reserve
        </Button>
      </div>
    </nav>
  );
}
