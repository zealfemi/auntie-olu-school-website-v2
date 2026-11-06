import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { schoolData } from "@/lib/school-data";

export const metadata = { title: "School gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our gallery"
        title={`Life at ${schoolData.header.name} ${schoolData.header.subtitle}.`}
        text="A little look at the bright, busy and beautiful moments that make our school community so special."
        image="/images/excursion-002.jpg"
        imageAlt="Pupils enjoying a school excursion"
      />
      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow">Everyday magic</p>
              <h2>Learning, laughter & lovely memories.</h2>
              <p>Capturing the moments that shape our future.</p>
            </div>
            <span className="gallery-total">36 <small>school moments</small></span>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
