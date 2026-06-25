"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import discoveryGraphic from "../../public/Ourprocess/DiscoverandStrategy.png";
import developmentGraphic from "../../public/Ourprocess/DesignandDevelopment.png";
import launchGraphic from "../../public/Ourprocess/LaunchandGrowth.png";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps: Array<{
  number: string;
  title: ReactNode;
  description: string;
  image: StaticImageData;
  alt: string;
}> = [
  {
    number: "01",
    title: <>Discovery &amp;<br />Strategy</>,
    description:
      "Understand your business, goals, audience, and competitors to create a winning digital strategy.",
    image: discoveryGraphic,
    alt: "Client brief, website wireframe, brand moodboard, and project roadmap",
  },
  {
    number: "02",
    title: <>Design &amp;<br />Development</>,
    description:
      "We design beautiful interfaces and build fast, responsive websites optimized for conversions.",
    image: developmentGraphic,
    alt: "Responsive website development across desktop, mobile, and code editor",
  },
  {
    number: "03",
    title: <>Launch &amp;<br />Growth</>,
    description:
      "Launch your website, grow your online presence, and scale with AI-powered marketing solutions.",
    image: launchGraphic,
    alt: "Website launch status, analytics, advertising performance, and social growth",
  },
];

function ProcessCard({
  step,
  delay,
}: {
  step: (typeof steps)[number];
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease, delay }}
      className="group flex min-h-[670px] flex-col overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0a0814]/85 p-6 shadow-[inset_0_0_55px_rgba(76,29,149,.08),0_18px_55px_rgba(0,0,0,.18)] transition-colors duration-300 hover:border-purple-500/40 sm:p-7"
    >
      <div className="text-center">
        <span className="inline-flex rounded-full border border-purple-400/45 bg-linear-to-b from-purple-600/80 to-purple-800/75 px-5 py-2 text-[15px] font-bold shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_6px_18px_rgba(88,28,135,.2)]">
          STEP {step.number}
        </span>
        <h3 className="mt-4 text-[32px] font-bold leading-[1.08] sm:text-[34px]">{step.title}</h3>
      </div>

      <div className="relative my-5 h-[340px] w-full overflow-hidden">
        <Image
          src={step.image}
          alt={step.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 390px, 90vw"
          className="object-contain"
        />
      </div>

      <p className="mx-auto mt-auto max-w-[350px] text-center text-base leading-7 text-zinc-300 sm:text-[18px] sm:leading-8">
        {step.description}
      </p>
    </motion.article>
  );
}

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative w-full scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pt-10 lg:pb-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(124,58,237,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.07) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,.12),#030208_68%)]" />

      {[
        ["left-[15%] top-[8%]", "h-20"],
        ["left-[8%] top-[20%]", "h-28"],
        ["right-[16%] top-[12%]", "h-24"],
        ["right-[5%] top-[24%]", "h-20"],
      ].map(([position, size]) => (
        <motion.span
          key={position}
          initial={{ opacity: 0.35, scale: 0.75 }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.75, 1.08, 0.75] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className={`pointer-events-none absolute ${position} ${size} w-px bg-linear-to-b from-transparent via-purple-300 to-transparent shadow-[0_0_15px_#a855f7]`}
        >
          <i className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 bg-linear-to-r from-transparent via-purple-300 to-transparent" />
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-[1340px]">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-11 flex flex-col items-center gap-5 text-center sm:mb-12"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/35 bg-purple-500/[0.08] px-5 py-2.5">
            <span className="text-purple-300">✦</span>
            <span className="text-sm font-semibold">Our Process</span>
          </div>

          <h2 className="max-w-5xl text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-[54px] lg:text-[68px]">
            From Idea To Launch
            <br />
            In{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p className="max-w-xl text-base leading-7 text-zinc-400 sm:text-[20px] sm:leading-8">
            We make building your digital presence simple,
            <br className="hidden sm:block" /> fast, and stress-free.
          </p>
        </motion.header>

        <div className="grid gap-7 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
