import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icons";
import { schoolData } from "@/lib/school-data";
import { assetPath } from "@/lib/site-path";

export const metadata = { title: "About our school" };

const principles = [
  ["Our mission", schoolData.about.mission, "compass"],
  ["Our vision", schoolData.about.vision, "spark"],
  ["Our promise", schoolData.about.promise, "heart"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About our school"
        title="A joyful place to grow."
        text={`At ${schoolData.header.name} ${schoolData.header.subtitle}, we make the early years count — building happy memories and strong foundations for a lifetime of learning.`}
        image="/images/students-001.jpg"
        imageAlt="Pupils gathered at Auntie Olu School"
      />

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-identity">
            <span className="story-ring story-ring-one" />
            <span className="story-ring story-ring-two" />
            <div className="story-badge">
              <Image
                src={assetPath("/images/auntie-olu-school-badge.png")}
                alt="Auntie Olu Nursery and Primary School badge"
                width={310}
                height={310}
              />
            </div>
            <span className="identity-note">God First · Government approved</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2>A school built with <em>love.</em></h2>
            <p>
              {schoolData.header.name} {schoolData.header.subtitle} began with
              one simple belief: every child deserves a place where they are
              safe, loved and inspired to learn. What started as a small, caring
              learning community has grown into a trusted home for families who
              want the very best start for their children.
            </p>
            <p>
              Today, our school is full of questions, laughter, creativity and
              discovery. We are proud to blend Nigerian values, a strong
              academic programme and a child-centred approach that lets each
              learner shine in their own way.
            </p>
            <blockquote className="story-quote">
              <Icon name="quote" size={25} />
              <span>“We give children roots to stand firm and wings to dream big.”</span>
              <cite>School Proprietress</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container section">
          <div className="section-heading centered-heading">
            <p className="eyebrow">What guides us</p>
            <h2>Our purpose, every day.</h2>
          </div>
          <div className="principles-grid">
            {principles.map(([title, text, icon], index) => (
              <article className="principle-card" key={title}>
                <span className="principle-index">0{index + 1}</span>
                <span className="principle-icon"><Icon name={icon} size={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container services-panel">
          <div className="services-heading">
            <p className="eyebrow">The Auntie Olu experience</p>
            <h2>What children enjoy here.</h2>
            <p>
              A warm, thoughtful environment for learning, making friends and
              discovering new interests.
            </p>
          </div>
          <div className="services-list">
            {schoolData.about.services.map((item) => (
              <div className="service-item" key={item}>
                <span><Icon name="check" size={17} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
