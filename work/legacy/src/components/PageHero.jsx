export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
      <div className="section relative py-20 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{text}</p>
      </div>
    </section>
  );
}
