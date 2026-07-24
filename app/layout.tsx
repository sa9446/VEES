import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jolt - Energy, Reimagined",
  description: "The ₹10 Daily Caffeine Chew. Fast-acting, pocket-sized energy for gym-goers, students, and night-shift workers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-dark text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}