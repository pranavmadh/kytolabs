"use client";


import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Data ──────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 0,
    quote:
      "KytoLabs transformed our idea into a stunning website that not only looks amazing but also drives real results. The team is incredible!",
    name: "James Carter",
    role: "Founder, UrbanNest",
    initials: "JC",
    gradient: "from-violet-600 to-purple-700",
  },
  {
    id: 1,
    quote:
      "Their AI-powered marketing strategies helped us scale our business faster than we imagined. Highly professional and reliable!",
    name: "Sarah Mitchell",
    role: "Marketing Head, GlowSkin",
    initials: "SM",
    gradient: "from-fuchsia-600 to-purple-700",
  },
  {
    id: 2,
    quote:
      "From design to development and automation, KytoLabs delivered everything we needed. Our sales have increased by 300%!",
    name: "Daniel Roberts",
    role: "CEO, FitZone",
    initials: "DR",
    gradient: "from-violet-500 to-purple-800",
  },
  {
    id: 3,
    quote:
      "Working with KytoLabs was a game changer. They understood our brand perfectly and built a platform that our customers love.",
    name: "Priya Sharma",
    role: "Director, Nexora AI",
    initials: "PS",
    gradient: "from-purple-500 to-fuchsia-800",
  },
];

// ── Stars ─────────────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex gap-1 mt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#a855f7" stroke="#a855f7" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

// ── Quote Icon ────────────────────────────────────────────────────────────────

function QuoteIcon() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 32V19.2C0 8.533 5.333 2.4 16 0L18.4 3.6C13.6 4.933 10.667 7.2 9.6 10.4H16V32H0ZM24 32V19.2C24 8.533 29.333 2.4 40 0L42.4 3.6C37.6 4.933 34.667 7.2 33.6 10.4H40V32H24Z" fill="#7c3aed" fillOpacity="0.7"/>
    </svg>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <article className="relative flex h-[190px] w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0814]/95 p-5 shadow-[inset_0_0_28px_rgba(76,29,149,.08)] transition-colors hover:border-purple-500/35 sm:w-[420px]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold leading-tight text-white">{testimonial.name}</h3>
          <p className="mt-1 text-xs text-zinc-500">{testimonial.role}</p>
          <div className="[&_svg]:h-3 [&_svg]:w-3"><Stars /></div>
        </div>
        <div className={`flex h-11 w-11 shrink-0 select-none items-center justify-center rounded-full bg-linear-to-br ${testimonial.gradient} text-sm font-bold text-white ring-2 ring-white/70 shadow-[0_0_18px_rgba(168,85,247,.25)]`}>
          {testimonial.initials}
        </div>
      </div>
      <p className="relative z-10 text-sm leading-6 text-zinc-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="pointer-events-none absolute -bottom-2 right-2 opacity-[0.04]"><QuoteIcon /></div>
    </article>
  );
}

function TestimonialRow({
  items,
  reverse = false,
}: {
  items: typeof testimonials;
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max gap-5"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration: reverse ? 34 : 30, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const secondRow = [
    ...testimonials.slice(2),
    ...testimonials.slice(0, 2),
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full scroll-mt-24 overflow-hidden py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(124,58,237,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.07) 1px,transparent 1px)",
        backgroundSize: "52px 52px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,.08),#030208_72%)]" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-700/15 blur-[110px]" />
      <div className="pointer-events-none absolute left-0 top-0 grid grid-cols-4 gap-0 opacity-20">
        {Array.from({ length: 12 }).map((_, index) => (
          <i key={index} className="h-14 w-14 border border-purple-500/10 bg-purple-500/[0.05]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 flex flex-col items-center gap-5 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-purple-500/[0.07] px-5 py-2.5">
            <span className="text-xl leading-none text-purple-300">&ldquo;</span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-purple-300">Testimonials</span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What Our{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="max-w-[560px] text-base leading-7 text-zinc-400 sm:text-lg">
            We&apos;re proud to help businesses grow and succeed.<br />
            Here&apos;s what our amazing clients have to say about working with KytoLabs.
          </p>
        </motion.header>
      </div>

      <div className="relative flex flex-col gap-5">
        <TestimonialRow items={testimonials} />
        <TestimonialRow items={secondRow} reverse />
      </div>

    </section>
  );
}
