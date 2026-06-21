"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "Services", href: "#" },
    { name: "Work", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Process", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#030208]/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className=" flex h-14 w-14 items-center justify-center rounded-xl overflow-hidden">
              <img
                src="/logo.png"
                alt="kytolabs logo"
                className="h-14 w-14  object-contain "
              />
            </div>
            <span className="text-2xl font-medium tracking-tight text-white">
              kytolabs
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  item.active ? "text-white" : "text-zinc-400"
                }`}
              >
                {item.name}
                {item.active && (
                  <span className="absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_#a855f7]" />
                )}
              </a>
            ))}
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="group flex items-center gap-2.5 rounded-xl border border-white/50 bg-transparent py-3 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
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
          isOpen ? "max-h-[400px] border-b border-white/[0.05] bg-[#030208]/95 backdrop-blur-lg" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1.5 px-4 pt-2 pb-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg py-2 px-3 text-base font-medium transition-colors ${
                item.active
                  ? "bg-purple-600/10 text-purple-400"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 px-4 text-center text-sm font-semibold text-white transition-all hover:bg-purple-500"
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
