import Image from "next/image";
import Link from "next/link";
import { schoolData } from "@/lib/school-data";
import { Icon } from "@/components/icons";

const highlights = [
  ["10+ years", "Growing young minds"],
  ["Nursery–Primary 6", "A strong foundation"],
  ["Small classes", "Every child matters"],
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" /> Government approved · Isolo,
              Lagos
            </p>
            <h1>
              A beautiful beginning for <em>bright futures.</em>
            </h1>
            <p className="hero-intro">
              Welcome to {schoolData.header.name} {schoolData.header.subtitle},
              where every child is encouraged to learn with joy, grow in
              confidence and reach for more.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Start your child’s journey <Icon name="arrow" size={18} />
              </Link>
              <Link href="/about" className="text-link">
                Discover our school <Icon name="arrow" size={17} />
              </Link>
            </div>
            <div className="hero-signoff">
              <span className="signoff-star">✦</span>
              <span>
                <strong>God First</strong>
                <small>in all we do</small>
              </span>
              <span className="signoff-divider" />
              <span className="signoff-note">
                A school family that feels like home
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <span className="hero-sunburst" aria-hidden="true" />
            <div className="hero-image-frame">
              <Image
                src="/images/students-001.jpg"
                alt="Pupils gathered together at Auntie Olu School"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <span className="hero-photo-caption">
                Learning, laughter & little steps forward
              </span>
            </div>
            <div className="hero-note-card">
              <span className="hero-note-icon">
                <Icon name="heart" size={20} />
              </span>
              <span>
                <strong>Every child matters</strong>
                <small>Seen, supported and celebrated</small>
              </span>
            </div>
            <div className="hero-number-card">
              <strong>01</strong>
              <span>One child at a time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-wrap" aria-label="School highlights">
        <div className="container highlights-card">
          {highlights.map(([title, caption], index) => (
            <div className="highlight" key={title}>
              <span className="highlight-index">0{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <span>{caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-visual">
            <div className="welcome-image-main">
              <Image
                src="/images/awards-013.jpg"
                alt="A teacher and pupils sharing a school moment"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div className="welcome-seal">
              <Image
                src="/images/auntie-olu-school-badge.png"
                alt="Auntie Olu Nursery and Primary School badge"
                width={106}
                height={106}
              />
              <span>Government approved</span>
            </div>
            <span className="welcome-photo-label">Our school family</span>
          </div>
          <div className="welcome-copy">
            <p className="eyebrow">Welcome to Auntie Olu Schools</p>
            <h2>
              Where little hands do <em>big things.</em>
            </h2>
            <p>
              We believe childhood should be filled with wonder. From a child’s
              first warm welcome in our nursery to their proud steps through
              primary school, our thoughtful team creates a safe, cheerful space
              where learning comes alive.
            </p>
            <p>
              Our balanced approach combines strong academics, creative play,
              moral guidance and meaningful relationships — helping children
              become curious learners and compassionate citizens.
            </p>
            <blockquote>
              <Icon name="quote" size={25} />
              <span>“{schoolData.about.promise}”</span>
              <cite>Our promise</cite>
            </blockquote>
            <Link className="text-link" href="/about">
              More about us <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container section values-inner">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Our approach</p>
            <h2>More than a school day.</h2>
            <p>
              Every experience is designed to help children thrive — in the
              classroom, on the playground and in life.
            </p>
          </div>
          <div className="values-grid">
            {schoolData.values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span className="value-icon">
                  <Icon name={value.icon} size={24} />
                </span>
                <span className="value-number">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="container experience-grid">
          <div className="experience-copy">
            <p className="eyebrow">A day at Auntie Olu</p>
            <h2>Curiosity has room to grow.</h2>
            <p>
              From joyful classroom activities to time spent learning together,
              we make space for children to ask questions, try new things and
              take pride in every new skill.
            </p>
            <Link href="/gallery" className="text-link">
              Explore school life <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/teacher-students-001.jpg"
              aria-label="A short video from Auntie Olu Nursery and Primary School">
              <source src="/videos/video-001.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <span className="video-caption">
              <Icon name="camera" size={17} /> Moments from our school
            </span>
          </div>
        </div>
      </section>

      <section className="section gallery-preview-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Everyday magic</p>
              <h2>Little moments. Big memories.</h2>
            </div>
            <Link href="/gallery" className="text-link">
              View all photos <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="preview-grid">
            {[
              [
                "/images/excursion-001.jpg",
                "A day out together",
                "preview-large",
              ],
              ["/images/awards-012.jpg", "Celebrating achievement", ""],
              ["/images/christmas-002.jpg", "End of year party", ""],
            ].map(([src, alt, className]) => (
              <Link
                href="/gallery"
                className={`preview-photo ${className}`}
                key={src}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
                <span>{alt}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="admissions-section">
        <div className="container admissions-panel">
          <div className="admissions-content">
            <p className="eyebrow eyebrow-light">Admissions open</p>
            <h2>Ready to join our school family?</h2>
            <p>
              We would love to meet you and your child. Get in touch to arrange
              a visit or ask about admissions.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Contact admissions <Icon name="arrow" size={18} />
          </Link>
          <span className="admissions-orbit" aria-hidden="true">
            ✦
          </span>
        </div>
      </section>
    </>
  );
}
