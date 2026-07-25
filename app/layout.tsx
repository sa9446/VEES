import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jolt — Energy, Evolved",
  description:
    "The ₹10 Daily Caffeine Chew. Fast-acting, pocket-sized energy for gym-goers, students, and night-shift workers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} font-sans bg-brand-dark text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
