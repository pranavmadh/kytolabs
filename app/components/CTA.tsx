"use client";

import { motion } from "framer-motion";

const calendlyUrl = "https://calendly.com/kytolabs/30min";
const phoneUrl = "tel:+971547383114";

export default function CTA() {
  return (
    <section id="book" className="relative scroll-mt-24 px-4 pb-4 pt-10 sm:px-6 sm:pb-5 lg:px-8">
      <span id="contact" className="absolute -top-24" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex min-h-[210px] max-w-7xl items-center justify-center overflow-hidden rounded-2xl border border-purple-500/35 bg-[#0a0814] px-6 py-10 shadow-[inset_0_0_55px_rgba(76,29,149,.1),0_16px_50px_rgba(0,0,0,.28)] sm:px-10"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <motion.div animate={{ x: [0, 24, 0], y: [0, 12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity }} className="absolute -left-28 -top-32 h-72 w-72 rounded-full bg-indigo-600/50 blur-[70px]" />
          <motion.div animate={{ x: [0, -20, 0], y: [0, 16, 0], scale: [1.06, 1, 1.06] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet-700/55 blur-[75px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.025),transparent_50%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }} className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.7rem]">
            Ready to Build Something Great?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.23 }} className="mt-2 text-sm text-zinc-400 sm:text-base">
            Let&apos;s create a powerful digital experience for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href={calendlyUrl}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-14 items-center gap-4 rounded-full border border-purple-400/70 bg-linear-to-r from-[#5a0aa8] via-[#6810ba] to-[#5d0aaa] py-1.5 pl-6 pr-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_10px_30px_rgba(126,34,206,.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.2),0_14px_38px_rgba(126,34,206,.45)]"
            >
              Book a Free Call
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-purple-700 shadow-[0_3px_12px_rgba(0,0,0,.2)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              href={phoneUrl}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-14 items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              Call Now
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-purple-700 shadow-[0_3px_12px_rgba(0,0,0,.2)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6.6 3.8 9 3l2 5-2.2 1.4a15 15 0 0 0 5.8 5.8L16 13l5 2-1 2.4a3 3 0 0 1-3.2 1.8C10.5 18.1 5.9 13.5 4.8 7.2A3 3 0 0 1 6.6 3.8Z" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
