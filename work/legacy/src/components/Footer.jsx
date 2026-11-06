import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Sparkles } from "lucide-react";

import { schoolData } from "../data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-20">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-[60px] w-[60px] md:h-[90px] md:w-[90px] place-items-center">
              <img
                src="/images/auntie-olu-school-badge.png"
                alt="school badge"
                className="rounded-[5px] object-contain"
              />
            </span>
            <span className="font-display text-xl font-bold">
              {schoolData.header.name} - {schoolData.header.subtitle}
            </span>
          </div>
          <p className="max-w-sm leading-7 text-white/75">
            {schoolData.header.description}
          </p>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-gold">
            Explore
          </h3>
          <div className="flex flex-col gap-3 text-white/75">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact Us"],
            ].map(([to, label]) => (
              <Link className="hover:text-gold" to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-gold">
            Get in touch
          </h3>
          <div className="space-y-3 text-sm leading-6 text-white/75">
            <p className="flex gap-3">
              <MapPin className="shrink-0 text-gold" size={18} />
              {schoolData.contact.address}
            </p>
            <p className="flex gap-3">
              <Phone className="shrink-0 text-gold" size={18} />
              {schoolData.contact.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="shrink-0 text-gold" size={18} />
              {schoolData.contact.email}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">
        © {new Date().getFullYear()} {schoolData.header.name}{" "}
        {schoolData.header.subtitle}
      </div>
    </footer>
  );
}
