"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ServiceIcon({ type }: { type: "design" | "development" | "seo" }) {
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20 lg:h-16 lg:w-16 border border-purple-500/35 bg-purple-500/[0.07] text-purple-400 shadow-[inset_0_0_24px_rgba(126,34,206,0.08)]">
      {type === "design" && (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 5 4 4M13 7l4 4M5 19l3.5-.7L19.2 7.6a2.1 2.1 0 0 0-3-3L5.6 15.2 5 19Z"/><path d="M4 13.5 2.8 18A2.5 2.5 0 0 0 6 21.2l4.5-1.2"/>
        </svg>
      )}
      {type === "development" && (
        <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>
        </svg>
      )}
      {type === "seo" && (
        <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M7 10.5h7M10.5 7v7"/>
        </svg>
      )}
    </span>
  );
}

function MobileArrow() {
  return (
    <span className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-3xl font-light text-purple-400 lg:hidden" aria-hidden="true">›</span>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.055] blur-[150px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, ease }} className="mb-10 flex flex-col items-center gap-5 text-center sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/35 bg-purple-500/[0.07] px-5 py-2.5 text-purple-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,.7)]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3"/></svg>
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.1em]">Our Services</span>
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Services That Drive{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            We help businesses grow with powerful digital solutions<br className="hidden sm:block"/> designed to perform and built to scale.
          </p>
        </motion.header>

        <div className="grid gap-4 lg:grid-cols-[.86fr_1.14fr] lg:grid-rows-[390px_230px]">
          <motion.article initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease }} className="group relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#0a0814]/85 p-6 sm:min-h-[430px] sm:p-8 lg:min-h-[640px] lg:row-span-2 lg:rounded-[26px]">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/[0.05] via-transparent to-transparent" />
            <MobileArrow />
            <div className="relative z-10 flex items-start gap-5">
              <ServiceIcon type="design"/>
              <div className="pt-1">
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Design</h3>
                <p className="max-w-[320px] text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">We create visually stunning, user-focused designs that reflect your brand and captivate your audience.</p>
              </div>
            </div>
            <div className="absolute inset-x-5 -bottom-52 h-[480px] sm:inset-x-12 sm:-bottom-56 sm:h-[520px] lg:inset-x-8 lg:-bottom-52 lg:h-[650px]">
              <Image src="/phone.png" alt="Mobile dashboard interface designed by KytoLabs" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-contain object-top transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.015]" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 86%, transparent 100%)" }}/>
            </div>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease, delay: .08 }} className="group relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#0a0814]/85 p-6 sm:min-h-[440px] sm:p-8 lg:min-h-[390px] lg:rounded-[26px]">
            <MobileArrow />
            <div className="relative z-10 flex items-start gap-5 pr-8 lg:pr-0">
              <ServiceIcon type="development"/>
              <div className="pt-1">
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Development</h3>
                <p className="max-w-[440px] text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">From idea to execution, we build fast, responsive websites and web applications that deliver real impact.</p>
              </div>
            </div>
            <div className="absolute inset-x-2 -bottom-10 h-[270px] sm:inset-x-14 sm:-bottom-14 sm:h-[310px] lg:inset-x-20 lg:bottom-[-78px] lg:h-[290px]">
              <Image src="/laptop.png" alt="Website development displayed on a laptop" fill sizes="(min-width: 1024px) 620px, 85vw" className="object-contain object-top transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 90%)" }}/>
            </div>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease, delay: .14 }} className="group relative min-h-[350px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#0a0814]/85 p-6 sm:min-h-[260px] sm:p-8 lg:min-h-0 lg:rounded-[26px]">
            <MobileArrow />
            <div className="relative z-10 flex items-start gap-5 pr-8 lg:pr-0">
              <ServiceIcon type="seo"/>
              <div className="pt-1">
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">SEO</h3>
                <p className="max-w-[350px] text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">We optimize your website to rank higher, drive organic traffic, and turn visitors into loyal customers.</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-16 h-[210px] w-[300px] opacity-95 sm:-bottom-16 sm:right-0 sm:h-[300px] sm:w-[430px] lg:-bottom-14 lg:-right-8 lg:h-[250px] lg:w-[360px]">
              <Image src="/seo.png" alt="SEO growth across search platforms" fill sizes="(min-width: 1024px) 360px, 60vw" className="object-contain transition-transform duration-700 group-hover:scale-105" style={{ maskImage: "radial-gradient(ellipse, black 45%, transparent 76%)" }}/>
            </div>
          </motion.article>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, ease, delay: .18 }} className="mx-auto mt-5 flex max-w-3xl flex-col items-stretch justify-between gap-5 rounded-2xl min-[520px]:flex-row min-[520px]:items-center sm:mt-7 border border-white/[0.1] bg-[#0a0814]/85 px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-400 shadow-[0_0_22px_rgba(147,51,234,.25)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.8 4.2c-3.5.8-6.3 3.6-7.1 7.1L4 15l5 1 1 5 3.7-3.7c3.5-.8 6.3-3.6 7.1-7.1L22 2l-7.2 2.2ZM15 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.5 17.5 2 22l4.5-2.5-2-2Z"/></svg>
            </span>
            <div><h3 className="font-bold text-white">Need something custom?</h3><p className="mt-1 text-sm text-zinc-400 sm:text-base">We offer tailored solutions to match your unique business needs.</p></div>
          </div>
          <a href="#contact" className="group inline-flex w-full shrink-0 items-center justify-center gap-4 rounded-xl min-[520px]:w-auto border border-purple-500/40 px-5 py-3 font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/10">Let&apos;s Talk <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a>
        </motion.div>
      </div>
    </section>
  );
}
