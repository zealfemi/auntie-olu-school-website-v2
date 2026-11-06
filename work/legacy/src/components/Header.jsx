import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { schoolData } from "../data";

const links = [
  ["..", "Home"],
  ["about", "About Us"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkStyle = ({ isActive }) =>
    `font-bold transition ${isActive ? "text-gold" : "text-navy hover:text-gold"}`;

  return (
    <header className="sticky md:static top-0 z-50 border-b border-navy/5 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          to=".."
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}>
          <span className="grid h-[60px] w-[60px] md:h-[90px] md:w-[90px] place-items-center">
            <img
              src="/images/auntie-olu-school-badge.png"
              alt="school badge"
              className="rounded-[5px] object-contain"
            />
          </span>
          <span>
            <span className="block font-display text-lg font-bold md:text-[28px] text-navy">
              {schoolData.header.name}
            </span>
            <span className="block text-[12px] md:text-[14px] font-extrabold uppercase tracking-[.10em] text-navy">
              {schoolData.header.subtitle}
            </span>
            <span className="block text-[11px] md:text-[14px] font-extrabold capitalize text-navy/70">
              (Government Approved)
            </span>
          </span>
        </Link>
        <nav className="hidden items-center md:text-center gap-8 md:flex">
          {links.map(([to, label]) => (
            <NavLink className={linkStyle} to={to} key={to}>
              {label}
            </NavLink>
          ))}
          <Link to="contact" className="btn-primary px-5 py-2.5">
            Enroll Now
          </Link>
        </nav>
        <button
          className="text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy/10 bg-cream px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([to, label]) => (
              <NavLink
                onClick={() => setOpen(false)}
                className={linkStyle}
                to={to}
                key={to}>
                {label}
              </NavLink>
            ))}
            <Link
              onClick={() => setOpen(false)}
              to="contact"
              className="btn-primary w-full">
              Enroll Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
