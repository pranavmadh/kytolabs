"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  "Design",
  "Development",
  "SEO",
];

const companyLinks = [
  ["Why Us", "#why-us"],
  ["Process", "#process"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#030208] px-4 pb-5 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 pb-7 pt-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_.9fr_.8fr_1.1fr] lg:gap-20"
        >
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label="KytoLabs home">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold tracking-tight text-white">kytolabs</span>
            </a>
            <p className="mt-3 text-sm text-zinc-500">Build. Design. Grow.</p>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon label="LinkedIn" href="https://www.linkedin.com/company/kytolabs">
                <path d="M7 9v8M7 6.5v.1M11 17v-4.5a3 3 0 0 1 6 0V17M11 9v8" />
              </SocialIcon>
              <SocialIcon label="Instagram" href="https://www.instagram.com/kytolabs">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M17.5 6.5h.01" />
              </SocialIcon>
              <SocialIcon label="X" href="https://x.com/kytolabs">
                <path d="m7 6 10 12M17 6 7 18" />
              </SocialIcon>
            </div>
          </div>

          <FooterColumn title="Services">
            {services.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-purple-300">{service}</a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-purple-300">{label}</a>
              </li>
            ))}
          </FooterColumn>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="tel:+971547383114" className="flex items-center gap-3 transition-colors hover:text-purple-300">
                  <ContactIcon><path d="M6.6 3.8 9 3l2 5-2.2 1.4a15 15 0 0 0 5.8 5.8L16 13l5 2-1 2.4a3 3 0 0 1-3.2 1.8C10.5 18.1 5.9 13.5 4.8 7.2A3 3 0 0 1 6.6 3.8Z" /></ContactIcon>
                  +971 54 738 3114
                </a>
              </li>
              <li>
                <a href="mailto:contact.pranovm@gmail.com" className="flex items-center gap-3 transition-colors hover:text-purple-300">
                  <ContactIcon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></ContactIcon>
                  <span className="break-all">contact.pranovm@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ContactIcon><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></ContactIcon>
                Dubai, UAE
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="pt-1 text-center text-[11px] text-zinc-600">
          &copy; 2026 KytoLabs. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-sm text-zinc-400">{children}</ul>
    </div>
  );
}

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <motion.a href={href} target="_blank" rel="noreferrer" aria-label={label} whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.92 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-purple-500/40 hover:text-purple-300">
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
    </motion.a>
  );
}

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg className="h-5 w-5 shrink-0 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  );
}
