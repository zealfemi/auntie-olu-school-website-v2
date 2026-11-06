import { useState } from "react";
import PageHero from "../components/PageHero";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { schoolData } from "../data";

const contact = [
  {
    icon: MapPin,
    title: "Visit us",
    text: schoolData.contact.address,
  },
  {
    icon: Phone,
    title: "Call us",
    text: schoolData.contact.phone,
  },
  {
    icon: Mail,
    title: "Email us",
    text: schoolData.contact.email,
  },
  {
    icon: Clock3,
    title: "Office hours",
    text: "Monday – Friday, 8:00am – 4:00pm",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s begin the conversation."
        text="Whether you would like to visit, ask a question or learn about joining our school, our friendly team would be delighted to hear from you."
        image="/images/students-002.jpg"
      />
      <section className="section">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">We’re here to help</p>
            <h2 className="section-title">Come and say hello.</h2>
            <p className="mt-5 leading-8 text-ink/70">
              Our contact details are below. We welcome prospective parents and
              are happy to arrange a convenient school visit.
            </p>
            <div className="mt-8 space-y-6">
              {contact.map(({ icon: Icon, title, text }) => (
                <div className="flex gap-4" key={title}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-navy">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{title}</h3>
                    <p className="mt-0.5 text-ink/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9 rounded-2xl bg-navy p-6">
              <p className="font-display text-xl font-bold text-gold">
                A note for parents
              </p>
              <p className="mt-2 leading-7 text-white/75">
                No question is too small. Send us a message and we will get back
                to you as soon as we can.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-ink/60">We would love to hear from you.</p>
            {sent ? (
              <div className="mt-7 rounded-xl bg-[#eaf7ef] p-6 text-[#1e6b3c]">
                <h3 className="font-bold">Thank you for your message!</h3>
                <p className="mt-1">--</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-7 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-navy">
                    Parent/Guardian name
                    <input
                      required
                      id="name"
                      className="text-base mt-2 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="text-sm font-bold text-navy">
                    Phone number
                    <input
                      required
                      type="tel"
                      id="phone"
                      className="text-base mt-2 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="0800 000 0000"
                    />
                  </label>
                </div>
                <label className="text-sm font-bold text-navy">
                  Email address
                  <input
                    required
                    type="email"
                    id="email"
                    className="text-base mt-2 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="text-sm font-bold text-navy">
                  How can we help?
                  <textarea
                    required
                    rows="5"
                    id="message"
                    className="text-base mt-2 w-full resize-none rounded-xl border border-navy/15 bg-cream px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="Tell us how we can help..."
                  />
                </label>
                <button className="btn-primary w-full sm:w-fit" type="submit">
                  Send message <Send className="ml-2" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
