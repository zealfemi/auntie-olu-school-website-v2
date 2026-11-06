import PageHero from "../components/PageHero";
import { Award, Compass, Lightbulb, Quote } from "lucide-react";
import { schoolData } from "../data";

const principles = [
  {
    icon: Compass,
    title: "Our mission",
    text: schoolData.about.mission,
  },
  {
    icon: Lightbulb,
    title: "Our vision",
    text: schoolData.about.vision,
  },
  {
    icon: Award,
    title: "Our promise",
    text: schoolData.about.promise,
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About our school"
        title="A joyful place to grow."
        text={`At ${schoolData.header.name + " " + schoolData.header.subtitle} , we make the early years count — building happy memories and strong foundations for a lifetime of learning.`}
        image="/images/students-001.jpg"
      />

      <section className="section">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 items-center">
          <img
            className="w-full rounded-lg object-contain"
            src="/images/auntie-olu-school-badge.png"
            alt="school badge"
          />
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">A school built with love.</h2>
            <p className="mt-5 leading-8 text-ink/70">
              {schoolData.header.name + " " + schoolData.header.subtitle} began
              with one simple belief: every child deserves a place where they
              are safe, loved and inspired to learn. What started as a small,
              caring learning community has grown into a trusted home for
              families who want the very best start for their children.
            </p>
            <p className="mt-4 leading-8 text-ink/70">
              Today, our school is full of questions, laughter, creativity and
              discovery. We are proud to blend Nigerian values, a strong
              academic programme and a child-centred approach that lets each
              learner shine in their own way.
            </p>
            <div className="mt-8 rounded-2xl border-l-4 border-gold bg-white p-6 shadow-soft">
              <Quote className="text-gold" fill="currentColor" />
              <p className="mt-2 font-display text-xl font-bold leading-8 text-navy">
                “We give children roots to stand firm and wings to dream big.”
              </p>
              <p className="mt-3 text-sm font-bold text-ink/55">
                — School Proprietress
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <p className="eyebrow text-center">What guides us</p>
          <h2 className="section-title text-center">Our purpose, every day.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article
                className="rounded-2xl bg-cream p-8 text-center"
                key={title}>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">
                  <Icon />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="rounded-[2rem] bg-[#E9F2F0] p-8 sm:p-12">
          <p className="eyebrow">The Auntie Olu experience</p>
          <h2 className="section-title">What children enjoy here.</h2>
          <div className="mt-7 grid gap-4 text-ink/75 sm:grid-cols-2 lg:grid-cols-3">
            {schoolData.about.services.map((item) => (
              <div
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 font-bold"
                key={item}>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
