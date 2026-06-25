"use client";

import Image from "next/image";
import avatarOne from "../../public/avatar/avatar1.png";
import avatarTwo from "../../public/avatar/avatar2.png";
import avatarThree from "../../public/avatar/avatar3.png";
import expertDesigner from "../../public/Expert_Designer.png";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const people = [
  { initials: "AK", src: avatarOne },
  { initials: "NM", src: avatarTwo },
  { initials: "RS", src: avatarThree },
];

const tasks = [
  ["Website Design", "Completed", "bg-green-400"],
  ["Development", "Completed", "bg-green-400"],
  ["Responsive Design", "In Progress", "bg-purple-400"],
  ["Testing & Optimization", "Pending", "bg-orange-400"],
];

function FeatureIcon({ kind }: { kind: "team" | "eye" }) {
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/[0.08] text-purple-400 shadow-[inset_0_0_25px_rgba(126,34,206,.08)]">
      {kind === "team" ? (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5" opacity=".75"/><path d="M2.5 19c.3-4 2.5-6 6.5-6s6.2 2 6.5 6H2.5ZM15 14c3.7 0 5.7 1.7 6 5h-4.2a8.2 8.2 0 0 0-1.8-5Z"/></svg>
      ) : (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 4.2A11.5 11.5 0 0 1 12 4c5.5 0 9 6 9 6a16 16 0 0 1-2.1 2.8M6.6 6.6C4.2 8.1 3 10 3 10s3.5 6 9 6c1.2 0 2.3-.3 3.3-.7"/></svg>
      )}
    </span>
  );
}

function Avatar({ person, small = false }: { person: typeof people[number]; small?: boolean }) {
  return (
    <span className={`relative flex shrink-0 items-center justify-center overflow-hidden border-2 border-purple-500/45 bg-purple-950 shadow-[0_0_18px_rgba(168,85,247,.3)] ${small ? "h-16 w-16 rounded-full" : "h-full w-full rounded-xl"}`}>
      <Image
        src={person.src}
        alt="KytoLabs team member"
        fill
        sizes={small ? "64px" : "160px"}
        className={`object-cover ${small ? "rounded-full" : "grayscale"}`}
      />
    </span>
  );
}
function DailyProgress() {
  const wires = [
    "M55 58V102C55 127 72 139 96 139H130C154 139 172 149 180 171",
    "M180 58V171",
    "M305 58V102C305 127 288 139 264 139H230C206 139 188 149 180 171",
  ];

  return (
    <div className="relative mb-2 h-[285px] overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-125px] h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-purple-500/[0.09]" />
      <div className="pointer-events-none absolute left-1/2 top-[-170px] h-[450px] w-[450px] -translate-x-1/2 rounded-full border border-purple-500/[0.07]" />
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-purple-500/[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-64 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />

      <div className="absolute inset-x-1 top-1 z-20 flex items-center justify-between sm:inset-x-3">
        {people.slice(0, 3).map((person, index) => (
          <motion.div key={person.initials} initial={{ opacity: 0, scale: .75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .12, ease }}>
            <Avatar person={person} small />
          </motion.div>
        ))}
      </div>

      <svg className="pointer-events-none absolute inset-x-0 top-5 z-10 h-[205px] w-full overflow-visible" viewBox="0 0 360 205" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="wire-gradient" x1="180" y1="58" x2="180" y2="194" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset=".65" stopColor="#C084FC"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient>
        </defs>

        {wires.map((wire, index) => (
          <g key={wire}>
            <path d={wire} stroke="url(#wire-gradient)" strokeWidth="2" strokeLinecap="round" opacity=".7" />
            <motion.path d={wire} stroke="#E9D5FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 150" filter="url(#wire-glow)" initial={{ strokeDashoffset: 160 }} animate={{ strokeDashoffset: -160 }} transition={{ duration: 2.2, delay: index * .3, repeat: Infinity, ease: "linear" }} />
          </g>
        ))}
        <path d="M180 171V194" stroke="url(#wire-gradient)" strokeWidth="2" strokeLinecap="round" />
        <motion.path d="M180 171V194" stroke="#F3E8FF" strokeWidth="3" strokeDasharray="6 24" filter="url(#wire-glow)" animate={{ strokeDashoffset: [30, -30] }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="180" cy="171" r="5" fill="#C084FC" filter="url(#wire-glow)" animate={{ r: [4, 7, 4], opacity: [.7, 1, .7] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>

      <motion.button type="button" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .35, ease }} className="absolute bottom-4 left-1/2 z-20 w-[82%] -translate-x-1/2 rounded-full border border-purple-400/70 bg-[#10091d]/90 px-6 py-4 text-base font-semibold text-purple-300 shadow-[0_0_28px_rgba(168,85,247,.18)] backdrop-blur-xl hover:border-purple-300 hover:shadow-[0_0_34px_rgba(168,85,247,.38)] sm:text-lg">
        <span className="mr-3 text-2xl font-light">+</span> Daily Progress
      </motion.button>
    </div>
  );
}
function UnlimitedRevisionFlow() {
  const leftWire = "M0 8V38C0 56 10 66 28 66H94C112 66 124 61 136 51";
  const rightWire = "M360 8V38C360 56 350 66 332 66H266C248 66 236 61 224 51";

  return (
    <div className="relative -mx-7 -mt-7 mb-2 h-[138px] overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-125px] h-[270px] w-[270px] -translate-x-1/2 rounded-full border border-purple-500/[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-[-165px] h-[350px] w-[350px] -translate-x-1/2 rounded-full border border-purple-500/[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-[-205px] h-[430px] w-[430px] -translate-x-1/2 rounded-full border border-purple-500/[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-4 h-24 w-52 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 360 138" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="revision-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="revision-wire" x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset=".5" stopColor="#D8B4FE"/><stop offset="1" stopColor="#7C3AED"/></linearGradient>
        </defs>
        {[leftWire, rightWire].map((wire, index) => (
          <g key={wire}>
            <path d={wire} stroke="url(#revision-wire)" strokeWidth="2" strokeLinecap="round" opacity=".75" />
            <motion.path d={wire} stroke="#F3E8FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 120" filter="url(#revision-glow)" initial={{ strokeDashoffset: 130 }} animate={{ strokeDashoffset: -130 }} transition={{ duration: 1.8, delay: index * .25, repeat: Infinity, ease: "linear" }} />
          </g>
        ))}
        <motion.circle cx="136" cy="51" r="4" fill="#C084FC" filter="url(#revision-glow)" animate={{ r: [3, 5, 3], opacity: [.6, 1, .6] }} transition={{ duration: 1.4, repeat: Infinity }} />
        <motion.circle cx="224" cy="51" r="4" fill="#C084FC" filter="url(#revision-glow)" animate={{ r: [3, 5, 3], opacity: [.6, 1, .6] }} transition={{ duration: 1.4, delay: .2, repeat: Infinity }} />
      </svg>

      <motion.button type="button" initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .45, ease }} className="absolute left-1/2 top-8 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-purple-400/70 bg-[#10091d]/95 px-6 py-3 text-sm font-semibold text-purple-300 shadow-[0_0_26px_rgba(168,85,247,.2)] backdrop-blur-xl hover:border-purple-300 hover:shadow-[0_0_34px_rgba(168,85,247,.4)]">
        Request, Anytime
      </motion.button>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative w-full scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.05] blur-[150px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, ease }} className="mb-14 flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/35 bg-purple-500/[0.07] px-5 py-2.5 text-purple-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white shadow-[0_0_16px_rgba(168,85,247,.65)]">★</span>
            <span className="text-sm font-semibold uppercase tracking-[0.1em]">Why Choose Us</span>
          </div>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            That&apos;s Why You&apos;ll Love<br className="hidden sm:block"/>{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Working With Us</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            We combine creativity, technology, and strategy to deliver websites<br className="hidden sm:block"/> that not only look stunning but also drive real business results.
          </p>
        </motion.header>

        <div className="grid gap-4 lg:grid-cols-[1.12fr_.9fr_1.1fr]">
          <motion.article initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease }} className="relative min-h-[570px] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0a0814]/85 p-7 sm:p-8">
            <div className="flex items-start gap-5">
              <FeatureIcon kind="team"/>
              <div><h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">Expert Designers</h3><p className="max-w-[320px] text-sm leading-7 text-zinc-300 sm:text-base">Work with experienced designers who create clean, modern, and conversion-focused designs.</p></div>
            </div>
            <div className="relative mt-8 aspect-[1/1.025] w-full overflow-hidden rounded-2xl">
              <Image
                src={expertDesigner}
                alt="KytoLabs expert design team"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 390px, 90vw"
                className="object-contain"
              />
            </div>
          </motion.article>

          <div className="grid gap-4">
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease, delay: .08 }} className="relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0a0814]/85 p-7">
              <DailyProgress />

              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">24-Hour Delivery</h3>
              <p className="text-sm leading-7 text-zinc-300 sm:text-base">We start fast and deliver your first design in just a day, no delays, no chasing.</p>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease, delay: .14 }} className="relative min-h-[270px] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0a0814]/85 p-7">
              <UnlimitedRevisionFlow />
              <div className="relative"><h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">Unlimited Revisions</h3><p className="text-sm leading-7 text-zinc-300 sm:text-base">Need changes? Just say it — we&apos;ll keep tweaking until you&apos;re 100% happy.</p></div>
            </motion.article>
          </div>

          <motion.article initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease, delay: .1 }} className="relative min-h-[570px] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0a0814]/85 p-7 sm:p-8">
            <div className="flex items-start gap-5"><FeatureIcon kind="eye"/><div><h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">Full Transparency</h3><p className="text-sm leading-7 text-zinc-300 sm:text-base">Track every task, every step. See every update in real-time. We keep you in the loop at all times.</p></div></div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0c0917]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4"><span className="font-semibold text-purple-300">Tasks <span className="mx-2 text-zinc-600">/</span> <small>In Progress</small></span><span className="text-xl">⚙</span></div>
              {tasks.map(([name, status, color], index) => (
                <div key={name} className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
                  <span className="flex items-center gap-3 text-sm font-medium text-zinc-200"><b className="text-purple-300">{index % 2 ? "▱" : "✦"}</b>{name}</span>
                  <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-zinc-300"><i className={`h-2 w-2 rounded-full ${color}`}/>{status}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 px-5 py-5 text-zinc-500"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700">+</span>Add New Task</div>
              <p className="px-5 pb-5 text-right text-xs text-zinc-600">KytoLabs ✦</p>
            </div>
          </motion.article>
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55, ease, delay: .18 }}
          className="group mx-auto mt-7 flex h-[72px] w-[330px] max-w-full items-center justify-center gap-5 rounded-full border border-purple-400/70 bg-linear-to-r from-[#5a0aa8] via-[#6810ba] to-[#5d0aaa] px-7 text-xl font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_10px_35px_rgba(126,34,206,.28)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.2),0_14px_42px_rgba(126,34,206,.45)]"
        >
          <span>Book a 15-min call</span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-purple-700 shadow-[0_3px_12px_rgba(0,0,0,.2)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </motion.a>
      </div>
    </section>
  );
}
