"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    gradient: "from-pink-600 to-rose-700",
  },
  {
    id: 2,
    quote:
      "From design to development and automation, KytoLabs delivered everything we needed. Our sales have increased by 300%!",
    name: "Daniel Roberts",
    role: "CEO, FitZone",
    initials: "DR",
    gradient: "from-blue-600 to-cyan-700",
  },
  {
    id: 3,
    quote:
      "Working with KytoLabs was a game changer. They understood our brand perfectly and built a platform that our customers love.",
    name: "Priya Sharma",
    role: "Director, Nexora AI",
    initials: "PS",
    gradient: "from-emerald-600 to-teal-700",
  },
];

const brands = [
  {
    name: "UrbanNest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: "GlowSkin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
  },
  {
    name: "FitZone",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: "Nexora AI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    name: "Vogue Avenue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    name: "BuildCo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
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
    <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-[#0d0b1a] p-7 h-full">
      <QuoteIcon />
      <p className="text-[15px] text-zinc-300 leading-relaxed flex-1">
        {testimonial.quote}
      </p>
      <div className="border-t border-white/[0.07] pt-5 flex items-center gap-4">
        {/* Avatar */}
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} ring-2 ring-purple-500/30 text-white font-bold text-lg select-none`}>
          {testimonial.initials}
        </div>
        {/* Info */}
        <div>
          <p className="font-bold text-white leading-tight">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.role}</p>
          <Stars />
        </div>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = testimonials.length;

  const prev = () => setActiveIndex((i) => (i - 1 + n) % n);
  const next = () => setActiveIndex((i) => (i + 1) % n);

  // 3 visible cards on desktop
  const visibleIndices = [activeIndex, (activeIndex + 1) % n, (activeIndex + 2) % n];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-4 text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 py-2 px-5">
            <span className="text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">Testimonials</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            What Our{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-[520px] leading-relaxed">
            We&apos;re proud to help businesses grow and succeed.<br />
            Here&apos;s what our amazing clients have to say about working with KytoLabs.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 bg-[#0d0b1a] text-purple-400 transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/10 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Cards — desktop 3-up, mobile 1-up */}
          <div className="flex-1 overflow-hidden">
            {/* Desktop */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease }}
                className="hidden lg:grid grid-cols-3 gap-5"
              >
                {visibleIndices.map((idx) => (
                  <TestimonialCard key={testimonials[idx].id} testimonial={testimonials[idx]} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${activeIndex}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease }}
                className="lg:hidden"
              >
                <TestimonialCard testimonial={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 bg-[#0d0b1a] text-purple-400 transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/10 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-purple-500" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Trusted brands */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-8">
            Trusted by businesses of all sizes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                <span>{brand.icon}</span>
                <span className="text-sm font-semibold tracking-wide">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
