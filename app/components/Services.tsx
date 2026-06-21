"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website Development",
    description: "Fast, modern and responsive websites that convert visitors into customers.",
    tags: ["Business Websites", "Landing Pages", "E-Commerce Stores"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Design & Branding",
    description: "Creative designs and strong brands that leave a lasting impression.",
    tags: ["UI/UX Design", "Brand Identity", "Logo Design"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    title: "Social Media Management",
    description: "We manage your social platforms and grow your audience organically.",
    tags: ["Content Creation", "Posting & Scheduling", "Community Management"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
    title: "AI Video Ads",
    description: "AI-powered video ads that grab attention and drive more sales.",
    tags: ["Product Ads", "UGC Style Videos", "Reels & Shorts"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "Data-driven campaigns that bring traffic, leads and real business growth.",
    tags: ["Meta Ads", "Google Ads", "Lead Generation"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path d="M12 17v2" />
      </svg>
    ),
    title: "AI Automation",
    description: "Automate workflows and save time with smart AI solutions.",
    tags: ["Chatbots", "CRM Automation", "Workflow Automation"],
  },
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Services() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 py-2 px-5">
            <span className="text-purple-400 text-sm leading-none">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Solutions That Drive<br />
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-[520px] leading-relaxed">
            We combine creativity, technology, and strategy to deliver digital
            experiences that help your business grow and scale.
          </p>
        </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="group relative flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-[#0a0814]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-[#0e0b1c]/80 hover:shadow-[0_8px_32px_rgba(168,85,247,0.12)]"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/80 to-violet-700/80 text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)]">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              </div>

              {/* Tags */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30 shrink-0">
                      <CheckIcon />
                    </span>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More */}
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.07] mt-auto">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-300"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  aria-hidden="true"
                  className="flex items-center justify-center h-8 w-8 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-200 hover:bg-purple-500/20 hover:border-purple-400/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <ArrowIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
