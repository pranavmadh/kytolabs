"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services does KytoLabs offer?",
    answer:
      "We offer a complete range of web development services including custom websites, eCommerce solutions, landing pages, UI/UX design, and website maintenance.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most projects take between two and eight weeks, depending on complexity. We share a clear timeline before work begins.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, performance improvements, content updates, and technical support after launch.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is responsive and carefully optimized for mobile, tablet, and desktop screens.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the scope and complexity of your website. After a short discovery call, we provide a clear proposal with costs and deliverables.",
  },
  {
    question: "Do you offer support after the project is completed?",
    answer:
      "Yes. We offer flexible post-launch support to keep your website secure, up to date, and performing at its best.",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section
      id="faq"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/[0.025] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.09) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 72%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-[620px] w-[620px] rounded-full bg-purple-900/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-44 -z-10 h-[580px] w-[580px] rounded-full bg-violet-900/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-[#030208] to-transparent"
      />

      <div className="mx-auto max-w-[1060px]">
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 flex flex-col items-center text-center sm:mb-14"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-500/35 bg-purple-500/[0.07] px-5 py-2.5 text-purple-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white shadow-[0_0_16px_rgba(168,85,247,.65)]">?</span>
            <span className="text-sm font-semibold uppercase tracking-[0.1em]">FAQ</span>
          </div>

          <h2 className="text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.55rem]">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Everything you need to know about working with KytoLabs.
            <br className="hidden sm:block" /> Can&apos;t find the answer
            you&apos;re looking for?{" "}
            <a
              href="mailto:hello@kytolabs.com"
              className="font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Contact us.
            </a>
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
          className="flex flex-col gap-3.5"
        >
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openItem === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={question}
                className={`overflow-hidden rounded-2xl border bg-[#0a0814]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.015)] backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-purple-500/55 bg-[#0a0814]/95 shadow-[0_0_28px_rgba(126,34,206,0.08)]"
                    : "border-white/[0.1] hover:border-purple-500/35 hover:bg-[#10091d]/80"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-purple-200 transition-colors sm:h-10 sm:w-10 ${
                        isOpen
                          ? "border-purple-500/50 bg-linear-to-br from-purple-500/80 to-violet-800/90"
                          : "border-purple-400/10 bg-purple-500/10"
                      }`}
                    >
                      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
                      <span
                        className={`absolute h-4 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>

                    <span className="min-w-0 flex-1 text-base font-semibold leading-6 text-zinc-50 sm:text-lg">
                      {question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative hidden h-5 w-5 shrink-0 text-purple-400 sm:block"
                    >
                      <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current" />
                      <span
                        className={`absolute left-2 top-0.5 h-4 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-label={question}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <p className="px-5 pb-6 pl-[4.5rem] text-sm leading-7 text-zinc-300 sm:px-7 sm:pb-7 sm:pl-[5.35rem] sm:pr-20 sm:text-base">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
