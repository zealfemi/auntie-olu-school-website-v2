import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Star,
  UsersRound,
  ChevronRight,
} from "lucide-react";

import { schoolData } from "../data";

const values = [
  {
    icon: HeartHandshake,
    title: "Character & faith",
    text: "We nurture kind hearts, confident voices and strong values — with God First at the centre.",
  },
  {
    icon: BookOpen,
    title: "Learning that lasts",
    text: "Our vibrant classrooms make foundational literacy, numeracy and curiosity feel exciting.",
  },
  {
    icon: UsersRound,
    title: "A caring community",
    text: "Teachers and families work hand in hand so every child feels known and supported.",
  },
];

export default function Home() {
  return (
    <>
      {/* BANNER */}

      <section className="relative isolate overflow-hidden bg-navy">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src="/images/excursion-003.jpg"
          alt="Happy pupils learning in a classroom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="section relative grid min-h-[590px] items-center py-20 lg:min-h-[660px]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[.12em] text-gold">
              <Star size={15} fill="currentColor" /> God First
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              A beautiful beginning for{" "}
              <span className="text-gold">bright futures.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Welcome to {schoolData.header.name} {schoolData.header.subtitle},
              where every child is encouraged to learn with joy, grow in
              confidence and reach for more.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Start your child’s journey{" "}
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/about" className="btn-outline">
                Discover our school
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-px overflow-hidden rounded-2xl bg-navy/10 shadow-soft sm:grid-cols-3">
        <div className="bg-white px-7 py-7 text-center">
          <strong className="block font-display text-3xl text-navy">
            10+ years
          </strong>
          <span className="mt-1 block text-sm font-bold text-ink/60">
            Growing young minds
          </span>
        </div>
        <div className="bg-white px-7 py-7 text-center">
          <strong className="block font-display text-3xl text-navy">
            Nursery–Primary 6
          </strong>
          <span className="mt-1 block text-sm font-bold text-ink/60">
            A strong foundation
          </span>
        </div>
        <div className="bg-white px-7 py-7 text-center">
          <strong className="block font-display text-3xl text-navy">
            Small classes
          </strong>
          <span className="mt-1 block text-sm font-bold text-ink/60">
            Every child matters
          </span>
        </div>
      </section>

      {/* WELCOME */}

      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Welcome to Auntie Olu Schools</p>
            <h2 className="section-title">Where little hands do big things.</h2>
            <p className="mt-5 leading-8 text-ink/70">
              We believe childhood should be filled with wonder. From a child’s
              first warm welcome in our nursery to their proud steps through
              primary school, our thoughtful team creates a safe, cheerful space
              where learning comes alive.
            </p>
            <p className="mt-4 leading-8 text-ink/70">
              Our balanced approach combines strong academics, creative play,
              moral guidance and meaningful relationships — helping children
              become curious learners and compassionate citizens.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center font-extrabold text-navy hover:text-gold">
              More about us <ChevronRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <img
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-soft"
              src="/images/students-001.jpg"
              alt="Children creating art together"
            />
            <div className="absolute -bottom-6 -left-4 max-w-[240px] rounded-2xl bg-gold p-5 shadow-soft sm:-left-8">
              <p className="font-display text-xl font-bold text-navy">
                “{schoolData.about.promise}”
              </p>
              <p className="mt-1 text-sm font-bold text-navy/70">
                — Our Promise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}

      <section className="bg-white">
        <div className="section">
          {/* <div className="max-w-2xl"> */}
          <div>
            {/* <div className="grid gap-12 lg:grid-cols-2 lg:gap-20"> */}
            <div>
              <div>
                <p className="eyebrow">Our approach</p>
                <h2 className="section-title">More than a school day.</h2>
                <p className="mt-4 leading-8 text-ink/70">
                  Every experience is designed to help children thrive — in the
                  classroom, on the playground and in life.
                </p>
              </div>
              <div>
                <video
                  src="/videos/video-001.mp4"
                  autoPlay
                  loop
                  controls
                  playsInline
                  muted
                  className="h-[80vh] lg:h-screen w-full rounded-xl object-cover shadow-soft mt-10"
                />
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                className="rounded-2xl border border-navy/5 bg-cream p-7 transition hover:-translate-y-1 hover:shadow-soft"
                key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2rem] bg-navy px-7 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div>
            <p className="eyebrow">Admissions open</p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to join our school family?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/75">
              We would love to meet you and your child. Get in touch to arrange
              a visit or ask about admissions.
            </p>
          </div>
          <Link to="/contact" className="btn-primary mt-7 shrink-0 lg:mt-0">
            Contact admissions <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
