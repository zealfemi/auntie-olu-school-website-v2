import Image from "next/image";

export function PageHero({ eyebrow, title, text, image, imageAlt = "" }) {
  return (
    <section className="page-hero">
      <Image
        className="page-hero-photo"
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority
      />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-text">{text}</p>
      </div>
      <span className="page-hero-mark" aria-hidden="true">AO</span>
    </section>
  );
}
