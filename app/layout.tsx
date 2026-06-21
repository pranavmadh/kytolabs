import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Bold.woff2",
  variable: "--font-satoshi",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kytolabs — AI-Powered Digital Agency",
  description:
    "We build stunning websites, manage your social presence, design with purpose, and create AI-powered video ads that drive real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
