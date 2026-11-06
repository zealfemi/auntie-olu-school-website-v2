import Image from "next/image";
import Link from "next/link";
import { schoolData } from "@/lib/school-data";
import { Icon } from "@/components/icons";

const links = [
  ["/", "Home"],
  ["/about", "About our school"],
  ["/gallery", "School gallery"],
  ["/contact", "Contact & admissions"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="footer-brand">
            <span className="footer-seal">
              <Image
                src="/images/auntie-olu-school-badge.png"
                alt=""
                width={62}
                height={62}
              />
            </span>
            <span>
              <strong>{schoolData.header.name}</strong>
              <small>{schoolData.header.subtitle}</small>
            </span>
          </Link>
          <p className="footer-description">
            A joyful place where children learn, grow and shine. We put God
            First in all we do.
          </p>
          <span className="footer-motto">Rooted in faith. Growing in joy.</span>
        </div>

        <div className="footer-link-column">
          <h2>Explore</h2>
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-contact-column">
          <h2>Come say hello</h2>
          <p>
            <Icon name="pin" size={18} />
            <span>{schoolData.contact.address}</span>
          </p>
          <a href={`tel:${schoolData.contact.phones[0]}`}>
            <Icon name="phone" size={18} />
            <span>{schoolData.contact.phone}</span>
          </a>
          <a href={`mailto:${schoolData.contact.email}`}>
            <Icon name="mail" size={18} />
            <span>{schoolData.contact.email}</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Auntie Olu Nursery & Primary School
          </span>
          <span>Made with care for curious young minds.</span>
        </div>
      </div>
    </footer>
  );
}
