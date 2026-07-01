"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { brandProfiles } from "@/data/brands";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/who-we-are" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Our Process", path: "/process" },
  { label: "Why Work With Us", path: "/why-us" },
  { label: "Contact", path: "/contact" },
];

type SiteNavProps = {
  light?: boolean;
};

export default function SiteNav({ light = false }: SiteNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const brandsRef = useRef<HTMLLIElement>(null);

  const isBrandsActive =
    pathname === "/brands" || pathname.startsWith("/case-studies/");

  const linkClass = (active: boolean) =>
    `text-xs font-medium tracking-wide transition-colors md:text-sm ${
      active
        ? light
          ? "text-black"
          : "text-sage"
        : light
          ? "text-secondary hover:text-black"
          : "text-caption hover:text-white"
    }`;

  const brandLinkClass = (active: boolean) =>
    light
      ? active
        ? "block px-4 py-2 text-sm font-semibold text-black"
        : "block px-4 py-2 text-sm text-secondary hover:bg-background hover:text-black"
      : active
        ? "block px-4 py-2 text-sm font-semibold text-black"
        : "block px-4 py-2 text-sm text-black hover:bg-white/5";

  useEffect(() => {
    setMobileOpen(false);
    setBrandsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (brandsRef.current && !brandsRef.current.contains(e.target as Node)) {
        setBrandsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const brandsDropdown = (
    <div
      className={`absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-lg border py-2 shadow-lg ${
        light
          ? "border-border bg-card"
          : "border-white/10 bg-olive-dark"
      }`}
    >
      <Link href="/brands" className={brandLinkClass(pathname === "/brands")}>All Brands</Link>
      <div className={`my-1 h-px ${light ? "bg-border" : "bg-white/10"}`} />
      {brandProfiles.map((brand) => {
        const brandPath = `/case-studies/${brand.slug}`;
        const active = pathname === brandPath;
        return (
          <Link key={brand.slug} href={brandPath} className={brandLinkClass(active)}>
            {brand.name}
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className="relative z-30">
      {/* Desktop nav */}
      <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
        {navLinks.slice(0, 4).map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={linkClass(pathname === link.path)}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li ref={brandsRef} className="relative">
          <button
            type="button"
            onClick={() => setBrandsOpen((o) => !o)}
            className={`flex items-center gap-1 ${linkClass(isBrandsActive)}`}
            aria-expanded={brandsOpen}
            aria-haspopup="true"
          >
            Brands
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${brandsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {brandsOpen && brandsDropdown}
        </li>

        {navLinks.slice(4).map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={linkClass(pathname === link.path)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        className={`lg:hidden ${light ? "text-primary" : "text-card"}`}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`absolute right-0 top-full z-50 mt-3 max-h-[70vh] w-64 overflow-y-auto rounded-lg border py-3 shadow-lg lg:hidden ${
            light
              ? "border-border bg-card"
              : "border-white/10 bg-olive-dark"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === link.path
                  ? light
                    ? "font-semibold text-black"
                    : "font-semibold text-sage"
                  : light
                    ? "text-secondary hover:bg-background hover:text-black"
                    : "text-caption hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className={`mx-4 my-2 h-px ${light ? "bg-border" : "bg-white/10"}`}
          />

          <button
            type="button"
            onClick={() => setBrandsOpen((o) => !o)}
            className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
              isBrandsActive
                ? light
                  ? "font-semibold text-black"
                  : "font-semibold text-sage"
                : light
                  ? "text-secondary"
                  : "text-caption"
            }`}
          >
            Brands
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${brandsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {brandsOpen && (
            <div className="pb-2">
              <Link
                href="/brands"
                className={light ? "block px-6 py-2 text-sm font-semibold text-black" : "block px-6 py-2 text-sm text-black"}
              >
                All Brands
              </Link>
              {brandProfiles.map((brand) => {
                const brandPath = `/case-studies/${brand.slug}`;
                const active = pathname === brandPath;
                return (
                  <Link
                    key={brand.slug}
                    href={brandPath}
                    className={
                      light
                        ? active
                          ? "block px-6 py-2 text-sm font-semibold text-black"
                          : "block px-6 py-2 text-sm text-secondary hover:text-black"
                        : active
                          ? "block px-6 py-2 text-sm font-semibold text-black"
                          : "block px-6 py-2 text-sm text-black hover:text-white"
                    }
                  >
                    {brand.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
