"use client";

import { useState } from "react";
import { schoolData } from "@/lib/school-data";
import { Icon } from "@/components/icons";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function openEmail(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `School enquiry from ${form.get("name")}`;
    const message = [
      `Parent/Guardian: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      "",
      String(form.get("message")),
    ].join("\n");
    window.location.href = `mailto:${schoolData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setNotice("Your email app should open with your message ready to send.");
  }

  return (
    <form className="contact-form" onSubmit={openEmail}>
      <div className="form-heading">
        <span className="form-icon"><Icon name="mail" size={21} /></span>
        <div>
          <h2>Send us a message</h2>
          <p>We would love to hear from you.</p>
        </div>
      </div>
      <div className="form-row">
        <label>
          Parent/Guardian name
          <input required name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Phone number
          <input required name="phone" type="tel" autoComplete="tel" placeholder="0800 000 0000" />
        </label>
      </div>
      <label>
        Email address
        <input required name="email" type="email" autoComplete="email" placeholder="you@email.com" />
      </label>
      <label>
        How can we help?
        <textarea required name="message" rows={5} placeholder="Tell us how we can help…" />
      </label>
      <button type="submit" className="button">
        Open email to send <Icon name="arrow" size={18} />
      </button>
      <p className="form-note">
        Your email app will open so you can review and send your message.
      </p>
      <p className="form-status" aria-live="polite">{notice}</p>
    </form>
  );
}
