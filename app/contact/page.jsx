import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { schoolData } from "@/lib/school-data";

export const metadata = { title: "Contact & admissions" };

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolData.contact.address)}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s begin the conversation."
        text="Whether you would like to visit, ask a question or learn about joining our school, our friendly team would be delighted to hear from you."
        image="/images/students-002.jpg"
        imageAlt="Pupils celebrating their learning at school"
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">We’re here to help</p>
            <h2>Come and say hello.</h2>
            <p className="contact-intro">
              Our contact details are below. We welcome prospective parents and
              are happy to arrange a convenient school visit.
            </p>

            <div className="contact-details">
              <a className="contact-detail" href={mapUrl} target="_blank" rel="noreferrer">
                <span className="contact-detail-icon"><Icon name="pin" size={21} /></span>
                <span><strong>Visit us</strong><small>{schoolData.contact.address}</small></span>
                <Icon name="arrow" size={17} className="contact-detail-arrow" />
              </a>
              {schoolData.contact.phones.map((phone) => (
                <a className="contact-detail" href={`tel:${phone}`} key={phone}>
                  <span className="contact-detail-icon"><Icon name="phone" size={20} /></span>
                  <span><strong>Call us</strong><small>{phone}</small></span>
                  <Icon name="arrow" size={17} className="contact-detail-arrow" />
                </a>
              ))}
              <a className="contact-detail" href={`mailto:${schoolData.contact.email}`}>
                <span className="contact-detail-icon"><Icon name="mail" size={20} /></span>
                <span><strong>Email us</strong><small>{schoolData.contact.email}</small></span>
                <Icon name="arrow" size={17} className="contact-detail-arrow" />
              </a>
              <div className="contact-detail">
                <span className="contact-detail-icon"><Icon name="clock" size={20} /></span>
                <span><strong>Office hours</strong><small>{schoolData.contact.hours}</small></span>
              </div>
            </div>

            <div className="parents-note">
              <span className="parents-note-mark">✦</span>
              <div>
                <strong>A note for parents</strong>
                <p>No question is too small. We’re happy to help you take the next step.</p>
              </div>
            </div>
            <Link href="/about" className="text-link">
              Learn about our school <Icon name="arrow" size={17} />
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
