"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Icons ────────────────────────────────────────────────────────────────────

const IconBox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4"/>
    <path d="m16.5 7.5 1.5-1.5" strokeWidth="2"/>
  </svg>
);

const IconPencil = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const IconRocket = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const IconGrowth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals and target audience.",
    icon: <IconSearch />,
    highlight: false,
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a tailored strategy to achieve your business goals.",
    icon: <IconTarget />,
    highlight: false,
  },
  {
    number: "03",
    title: "Design",
    description: "We design modern, user-friendly and conversion-focused interfaces.",
    icon: <IconPencil />,
    highlight: true,
  },
  {
    number: "04",
    title: "Development",
    description: "We build fast, scalable and high-performing solutions.",
    icon: <IconCode />,
    highlight: false,
  },
  {
    number: "05",
    title: "Launch",
    description: "We launch your project and ensure everything runs smoothly.",
    icon: <IconRocket />,
    highlight: false,
  },
  {
    number: "06",
    title: "Growth",
    description: "We help you grow with marketing, automation and AI-powered strategies.",
    icon: <IconGrowth />,
    highlight: false,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function HowWeWork() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 py-2 px-5">
            <span className="text-purple-400"><IconBox /></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">Our Process</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            How We{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-[500px] leading-relaxed">
            We follow a simple, proven process to deliver high-quality digital
            solutions that drive real results.
          </p>
        </motion.div>

        {/* ── Desktop Timeline ── */}
        <div className="hidden lg:block">
          {/* Circles row */}
          <div className="flex items-center">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center flex-1 last:flex-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="relative flex-none"
                >
                  {/* Step number */}
                  <span className="absolute -top-5 -left-1 text-xs font-bold text-zinc-500">
                    {step.number}
                  </span>

                  {/* Circle */}
                  <div
                    className={`
                      relative flex h-[78px] w-[78px] items-center justify-center rounded-full
                      transition-all duration-300
                      ${step.highlight
                        ? "bg-purple-600 shadow-[0_0_32px_rgba(139,92,246,0.6)] ring-2 ring-purple-400/50"
                        : "bg-[#0e0b1c] ring-2 ring-purple-600/40 shadow-[0_0_16px_rgba(139,92,246,0.2)]"
                      }
                    `}
                  >
                    <span className={step.highlight ? "text-white" : "text-purple-400"}>
                      {step.icon}
                    </span>
                  </div>
                </motion.div>

                {/* Dashed connector */}
                {i < steps.length - 1 && (
                  <div className="flex-1 mx-2" style={{ borderTop: "2px dashed rgba(139,92,246,0.25)" }} />
                )}
              </div>
            ))}
          </div>

          {/* Text row */}
          <div className="grid mt-8" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.08 }}
                className="flex flex-col items-center text-center px-3 pt-2"
              >
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{step.description}</p>
                <div className="h-0.5 w-8 rounded-full bg-linear-to-r from-purple-500 to-violet-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile Timeline ── */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="flex gap-5"
            >
              {/* Left: number + circle + vertical line */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-zinc-500 mb-1">{step.number}</span>
                <div
                  className={`
                    flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                    ${step.highlight
                      ? "bg-purple-600 shadow-[0_0_24px_rgba(139,92,246,0.5)] ring-2 ring-purple-400/50"
                      : "bg-[#0e0b1c] ring-2 ring-purple-600/40"
                    }
                  `}
                >
                  <span className={step.highlight ? "text-white" : "text-purple-400"}>
                    {/* Scale down icon for mobile */}
                    <span className="scale-75 block">{step.icon}</span>
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 mt-2" style={{ borderLeft: "2px dashed rgba(139,92,246,0.25)", width: 0 }} />
                )}
              </div>

              {/* Right: text */}
              <div className="pb-8 pt-6">
                <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                <div className="h-0.5 w-6 rounded-full bg-purple-500 mt-3" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
