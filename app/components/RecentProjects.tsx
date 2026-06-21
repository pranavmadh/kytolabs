"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const filterTabs = ["All Projects", "Web Development", "Design & Branding", "Marketing", "AI Video Ads"];

interface ProjectStyle {
  bg: string;
  accent: string;
  tagline: string;
  ctaText: string;
  ctaStyle: string;
  ctaBorder?: boolean;
  logoText: string;
  theme: "light" | "dark";
  extras?: React.ReactNode;
}

interface Project {
  id: number;
  name: string;
  category: string;
  filterCategory: string;
  metric: string;
  style: ProjectStyle;
  icon: React.ReactNode;
  href?: string;
}

// ── Tiny Icons ──────────────────────────────────────────────────────────────

const IconCar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
  </svg>
);

// ── Mini Website Thumbnail ───────────────────────────────────────────────────

function MiniWebsite({ style }: { style: ProjectStyle }) {
  const isDark = style.theme === "dark";
  return (
    <div className={`w-full h-full bg-gradient-to-br ${style.bg} relative overflow-hidden select-none`}>
      {/* Nav */}
      <div className={`flex items-center justify-between px-3 py-1.5 border-b ${isDark ? "border-white/5" : "border-black/5"}`}>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: style.accent }} />
          <span className={`text-[5.5px] font-bold ${isDark ? "text-white/90" : "text-gray-800"}`}>{style.logoText}</span>
        </div>
        <div className="flex gap-2">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <div key={item} className={`text-[4px] ${isDark ? "text-white/25" : "text-gray-400"}`}>{item}</div>
          ))}
          <div
            className="text-[4px] px-1.5 py-0.5 rounded-full font-medium"
            style={{ background: style.accent, color: isDark ? "#000" : "#fff", opacity: 0.9 }}
          >
            Get Started
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="px-3 pt-3 pb-2">
        <div
          className={`text-[7px] font-black leading-tight mb-1.5 whitespace-pre-line uppercase tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {style.tagline}
        </div>
        <div className={`text-[3.5px] mb-2.5 leading-relaxed ${isDark ? "text-white/35" : "text-gray-500"}`}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
        </div>
        <div
          className={`inline-block text-[4.5px] font-bold px-2 py-0.5 rounded ${style.ctaStyle} ${style.ctaBorder ? "border" : ""}`}
        >
          {style.ctaText}
        </div>
      </div>

      {/* Decorative shimmer bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 opacity-20"
        style={{ background: `linear-gradient(to top, ${style.accent}30, transparent)` }}
      />
    </div>
  );
}

// ── Project Data ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 9,
    name: "CC CarHire",
    category: "Website Development",
    filterCategory: "Web Development",
    metric: "+175% Bookings",
    href: "https://www.cccarhire.net/",
    icon: <IconCar />,
    style: {
      bg: "from-sky-50 via-cyan-50 to-teal-100",
      accent: "#0891b2",
      tagline: "EXPLORE\nPRASLIN\nYOUR WAY",
      ctaText: "Book Your Car",
      ctaStyle: "bg-cyan-600 text-white",
      logoText: "CC CarHire",
      theme: "light",
    },
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function RecentProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-4 text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-2 px-5">
            <span className="text-purple-400 text-sm leading-none">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Our Work</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Recent{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-[520px] leading-relaxed">
            A glimpse of the brands we&apos;ve helped grow with powerful websites,
            creative designs and smart marketing.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeFilter === tab && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full border border-purple-500/60 bg-purple-500/15"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease, delay: i * 0.05 }}
                className="group flex flex-col rounded-2xl border border-white/[0.07] bg-[#0a0814]/70 overflow-hidden hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(168,85,247,0.12)] transition-all duration-300 cursor-pointer"
                {...(project.href
                  ? { onClick: () => window.open(project.href, "_blank", "noopener,noreferrer") }
                  : {})}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <MiniWebsite style={project.style} />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/5 transition-colors duration-300" />
                  {/* Live site badge */}
                  {project.href && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] text-white/80 font-medium">Live Site</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex items-center gap-3 px-3.5 py-3">
                  {/* Icon circle */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600/20 text-purple-400 ring-1 ring-purple-500/30">
                    {project.icon}
                  </div>

                  {/* Name + category */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate leading-tight">{project.name}</p>
                    <p className="text-[11px] text-zinc-500 leading-tight">{project.category}</p>
                  </div>

                  {/* Metric badge */}
                  <div className="shrink-0 rounded-full bg-purple-500/15 border border-purple-500/25 px-2.5 py-1">
                    <span className="text-[10px] font-bold text-purple-300">{project.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
