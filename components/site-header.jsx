"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { schoolData } from "@/lib/school-data";
import { Icon } from "@/components/icons";

const navigation = [
  ["/", "Home"],
  ["/about", "About us"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-location">
            <Icon name="pin" size={15} /> Ire Akari Estate, Isolo, Lagos
          </span>
          <a href={`tel:${schoolData.contact.phones[0]}`}>
            <Icon name="phone" size={15} />
            <span>Speak with our team</span>
          </a>
        </div>
      </div>
      <div className="container nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Auntie Olu Nursery and Primary School home"
          onClick={() => setMenuOpen(false)}>
          <span className="brand-seal">
            <Image
              src="/images/auntie-olu-school-badge.png"
              alt=""
              width={76}
              height={76}
              priority
            />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Auntie Olu</span>
            <span className="brand-subtitle">Nursery & Primary School</span>
            <span className="brand-approved">Government approved</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? "is-active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="button button-small">
            Enroll now <Icon name="arrow" size={17} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!menuOpen}>
        <div className="container mobile-nav-inner">
          {navigation.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-link ${pathname === href ? "is-active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}>
              {label} <Icon name="chevron" size={18} />
            </Link>
          ))}
          <Link
            href="/contact"
            className="button mobile-enroll"
            onClick={() => setMenuOpen(false)}>
            Enroll now <Icon name="arrow" size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
