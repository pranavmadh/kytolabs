"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const headingLines = [
  { text: "We Turn Ideas Into", gradient: false },
  { text: "Digital Experiences", gradient: true },
  { text: "That Sell.", gradient: false },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&h=100&q=80",
];

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const init = async () => {
      if (vantaEffect.current || !vantaRef.current) return;
      // Vanta uses a module-level `let l = window.THREE` in onInit — must be set
      // before the dynamic import so the variable captures the correct value.
      (window as unknown as Record<string, unknown>).THREE = THREE;
      // @ts-expect-error vanta ships no TypeScript types
      const { default: DOTS } = await import("vanta/dist/vanta.dots.min");
      vantaEffect.current = DOTS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x030208,
        color: 0x8b5cf6,
        color2: 0x6d28d9,
        size: 3.5,
        spacing: 38,
        showLines: false,
      });
    };
    init();
    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  return (
    <section id="home" className="relative w-full scroll-mt-24 pt-36 pb-12 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Vanta DOTS canvas */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Subtle dark overlay so text stays readable */}
      <div className="absolute inset-0 z-1 bg-[#030208]/30 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto px-4">

        {/* Pill badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex md:hidden items-center gap-2 rounded-full border border-purple-500/35 bg-purple-500/[0.07] py-2 px-5 text-purple-300 backdrop-blur-sm"
        >
          <span className="text-purple-400 text-sm leading-none">✦</span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-300">
            Digital Experiences Built To Convert
          </span>
        </motion.div>

        {/* Heading — each line reveals independently */}
        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-white leading-[1.08]">
          {headingLines.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.22 + i * 0.13 }}
            >
              {line.gradient ? (
                <span className="bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  {line.text}
                </span>
              ) : (
                line.text
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.55)}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[500px]"
        >
          KytoLabs provides global website development, web design, and SEO to
          create fast, conversion-focused experiences for ambitious brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
        >
          <a
            href="#book"
            className="group flex items-center gap-2 rounded-xl border border-purple-400/70 bg-linear-to-r from-[#5a0aa8] via-[#6810ba] to-[#5d0aaa] py-3.5 px-7 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_8px_26px_rgba(126,34,206,.25)] transition-all duration-300 hover:border-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02]"
          >
            Book a Free Call
            <svg
              xmlns="http://www.w3.org/2000/svg" width="15" height="15"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0814]/85 py-3.5 px-7 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-500/35 hover:bg-purple-500/[0.08] hover:scale-[1.02]"
          >
            View Our Work
            <svg
              xmlns="http://www.w3.org/2000/svg" width="15" height="15"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div {...fadeUp(0.76)} className="flex items-center gap-4 mt-2">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt=""
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease, delay: 0.78 + i * 0.06 }}
                className="h-9 w-9 rounded-full border-2 border-[#0a0814] object-cover bg-zinc-800"
              />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 text-left">
            <div className="flex items-center gap-0.5 text-purple-400">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease, delay: 1.0 + i * 0.07 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              ))}
            </div>
            <motion.span {...fadeUp(1.06)} className="text-xs font-medium text-zinc-400">
              Trusted by 50+ Businesses
            </motion.span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
