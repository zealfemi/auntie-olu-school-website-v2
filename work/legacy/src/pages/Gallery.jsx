import PageHero from "../components/PageHero";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { schoolData } from "../data";

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) =>
      event.key === "Escape" && setSelectedPhoto(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our gallery"
        title={`Life at ${schoolData.header.name + " " + schoolData.header.subtitle}.`}
        text="A little look at the bright, busy and beautiful moments that make our school community so special."
        image="/images/excursion-002.jpg"
      />

      <section className="section">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Everyday magic</p>
          <h2 className="section-title">
            Learning, laughter & lovely memories.
          </h2>
          <p className="mt-4 leading-8 text-ink/70">
            Capturing the moments that shape our future.
          </p>
        </div>

        <div className="grid auto-rows-[230px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {schoolData.gallery.map(([src, alt], i) => (
            <button
              type="button"
              onClick={() => setSelectedPhoto({ src, alt })}
              className={`group relative overflow-hidden rounded-2xl text-left outline-none focus:ring-4 focus:ring-gold/60 ${i === 0 || i === 5 ? "sm:col-span-2" : ""} ${i === 0 ? "sm:row-span-2" : ""}`}
              key={`${alt}-${i}`}
              aria-label={`View ${alt} in full size`}>
              <img
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={src}
                alt={alt}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-5 pb-4 pt-12 font-display text-lg font-bold text-white">
                {alt}
              </figcaption>
            </button>
          ))}
        </div>
      </section>
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedPhoto(null)}>
          <div
            className="relative max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="mt-3 text-center font-display text-xl font-bold text-white">
              {selectedPhoto.alt}
            </p>
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute -right-2 -top-2 grid h-11 w-11 place-items-center rounded-full bg-gold text-navy shadow-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40"
              aria-label="Close image preview">
              <X size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
