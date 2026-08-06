import { useEffect, useState } from "react";
import {
  profile,
  whatIDo,
  projects,
  experience,
  skills,
  TRACKS,
} from "./data.js";
import PipelineCanvas from "./PipelineCanvas.jsx";

const NAV = [
  { id: "about", label: "About" },
  { id: "what-i-do", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ---------------------------------------------------------------- atoms -- */

function TrackBadge({ track }) {
  const t = TRACKS[track];
  if (!t) return null;
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-semibold tracking-wide ${t.className}`}
      title={t.label}
    >
      {t.short}
    </span>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded border border-line bg-white px-2 py-1 font-mono text-[11px] text-body">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {lead ? <p className="mt-3 leading-relaxed">{lead}</p> : null}
    </div>
  );
}

function Section({ id, alt = false, children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-line ${alt ? "bg-surface" : "bg-white"}`}
    >
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ nav -- */

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur transition-colors ${
        solid ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 lg:px-8">
        <a
          href="#top"
          className="font-semibold tracking-tight text-ink hover:text-accent"
        >
          V Nagasai Gautam K
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-body transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-line px-3 py-1.5 text-sm text-body md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white px-6 pb-4 md:hidden"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-sm text-body last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

/* ----------------------------------------------------------------- hero -- */

function Hero() {
  const links = [
    { href: profile.github, label: "GitHub", primary: false },
    { href: profile.linkedin, label: "LinkedIn", primary: false },
    { href: `mailto:${profile.email}`, label: "Email", primary: true },
    { href: profile.resume, label: "Resume (PDF)", primary: false },
  ];

  return (
    <div id="top" className="bg-white">
      <div className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-24 lg:px-8">
        <p className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {profile.location}
          <span className="text-line">/</span>
          Open to Data Analyst · Data Engineer · AI/ML Engineer roles
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-5 text-lg text-ink sm:text-xl">
          {profile.title}
          <span className="mx-2 text-line">|</span>
          <span className="text-body">{profile.subtitle}</span>
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{profile.pitch}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className={
                l.primary
                  ? "rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  : "rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          {whatIDo.map((d) => (
            <div key={d.track} className="bg-white px-5 py-4">
              <div className="flex items-center gap-2">
                <TrackBadge track={d.track} />
                <span className="text-sm font-medium text-ink">{d.title}</span>
              </div>
            </div>
          ))}
        </div>

        <PipelineCanvas />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- about -- */

function About() {
  return (
    <Section id="about" alt>
      <SectionHeading eyebrow="About" title="One lifecycle, not three job titles" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-4 leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="h-fit rounded-lg border border-line bg-white p-6 text-sm">
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Education
          </dt>
          <dd className="mt-2 font-medium text-ink">
            {profile.education.degree}
          </dd>
          <dd className="text-body">
            {profile.education.school}, {profile.education.year}
          </dd>

          <dt className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Based in
          </dt>
          <dd className="mt-2 text-ink">{profile.location}</dd>

          <dt className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Currently
          </dt>
          <dd className="mt-2 text-ink">
            {experience[0].role} at {experience[0].company}
          </dd>
        </dl>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- what i do -- */

function WhatIDo() {
  return (
    <Section id="what-i-do">
      <SectionHeading
        eyebrow="What I Do"
        title="Three disciplines, one pipeline"
        lead="Raw data → engineering → analysis → ML → business insight. These are the three angles I work from, and most of my projects touch more than one."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {whatIDo.map((d) => (
          <div
            key={d.track}
            className="flex flex-col rounded-lg border border-line bg-white p-6 transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-2">
              <TrackBadge track={d.track} />
              <h3 className="text-lg font-semibold text-ink">{d.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed">{d.blurb}</p>
            <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
              {d.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- projects -- */

function ProjectCard({ p, featured = false }) {
  return (
    <article
      className={`flex flex-col rounded-lg border bg-white p-6 transition-shadow hover:shadow-sm ${
        featured ? "border-accent/40 sm:p-8" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {p.tracks.map((t) => (
          <TrackBadge key={t} track={t} />
        ))}
        {featured ? (
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Flagship
          </span>
        ) : null}
      </div>

      <h3
        className={`mt-3 font-semibold tracking-tight text-ink ${
          featured ? "text-xl sm:text-2xl" : "text-lg"
        }`}
      >
        {p.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>

      {p.techniques ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          <span className="font-medium text-body">Techniques: </span>
          {p.techniques}
        </p>
      ) : null}

      {p.image ? (
        <figure className="mt-5">
          <img
            src={`${import.meta.env.BASE_URL}${p.image}`}
            alt={`${p.title} — Power BI dashboard`}
            loading="lazy"
            className="w-full rounded border border-line bg-white"
          />
          {p.imageCaption ? (
            <figcaption className="mt-2 text-xs leading-relaxed text-muted">
              {p.imageCaption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {p.stats?.length ? (
        <ul className="mt-5 grid gap-x-6 gap-y-1.5 border-t border-line pt-4 font-mono text-[12px] text-body sm:grid-cols-2">
          {p.stats.map((s) => (
            <li key={s} className="tabular-nums">
              {s}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {p.repo || p.live ? (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-4 text-sm font-medium">
          {p.repo ? (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              View on GitHub →
            </a>
          ) : null}
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Live site →
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" alt>
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        lead="Each project is tagged with the disciplines it demonstrates — DE (data engineering), DA (analytics), AI (machine learning)."
      />
      <div className="space-y-5">
        {featured.map((p) => (
          <ProjectCard key={p.title} p={p} featured />
        ))}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- experience -- */

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've done this" />
      <div className="space-y-5">
        {experience.map((job) => (
          <article
            key={job.company}
            className="rounded-lg border border-line bg-white p-6 sm:p-7"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
              <p className="font-mono text-[12px] tabular-nums text-muted">
                {job.period} · {job.place}
              </p>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{job.role}</p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-2.5">
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {job.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- skills -- */

function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeading eyebrow="Skills" title="Grouped by discipline" />
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="rounded-lg border border-line bg-white p-6">
            <div className="flex items-center gap-2 border-b border-line pb-3">
              {g.track ? <TrackBadge track={g.track} /> : null}
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                {g.group}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- contact -- */

function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Let's talk about your data problem
        </h2>
        <p className="mt-3 leading-relaxed">
          Open to Data Analyst, Data Engineer, and AI/ML Engineer roles. The
          fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
          {profile.location} · Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ app -- */

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
