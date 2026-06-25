"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "Services", href: "#services", sectionId: "services" },
  { name: "Why Us", href: "#why-us", sectionId: "why-us" },
  { name: "Process", href: "#process", sectionId: "process" },
  { name: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { name: "FAQ", href: "#faq", sectionId: "faq" },
  { name: "Contact", href: "#contact", sectionId: "book" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.01, 0.15, 0.3] },
    );

    navItems.forEach(({ sectionId }) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/10 bg-[#030208]/80 shadow-[0_8px_30px_rgba(3,2,8,.24)] backdrop-blur-xl transition-all duration-300">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px bg-zinc-300/30 transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" aria-label="KytoLabs home">
            <div className=" flex h-14 w-14 items-center justify-center rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="kytolabs logo"
                width={56}
                height={56}
                className="h-14 w-14  object-contain "
              />
            </div>
            <span className="text-2xl font-medium tracking-tight text-white">
              kytolabs
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              (() => {
                const active = activeSection === item.sectionId;
                return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  active ? "text-white" : "text-zinc-400"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_#a855f7]" />
                )}
              </a>
                );
              })()
            ))}
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="group flex items-center gap-2.5 rounded-xl border border-purple-400/60 bg-purple-500/[0.08] py-3 px-6 text-sm font-medium text-purple-100 shadow-[inset_0_0_18px_rgba(126,34,206,.08)] transition-all duration-300 hover:border-purple-300 hover:bg-purple-500/15 hover:shadow-[0_0_24px_rgba(168,85,247,.22)]"
            >
              Book a Free Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] border-b border-purple-500/10 bg-[#030208]/95 backdrop-blur-lg" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1.5 px-4 pt-2 pb-6">
          {navItems.map((item) => (
            (() => {
              const active = activeSection === item.sectionId;
              return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg py-2 px-3 text-base font-medium transition-colors ${
                active
                  ? "bg-purple-600/10 text-purple-400"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </a>
              );
            })()
          ))}
          <div className="pt-4">
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/70 bg-linear-to-r from-[#5a0aa8] via-[#6810ba] to-[#5d0aaa] py-3 px-4 text-center text-sm font-semibold text-white shadow-[0_8px_24px_rgba(126,34,206,.25)] transition-all hover:border-purple-300 hover:brightness-110"
            >
              Book a Free Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="inline-block"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
