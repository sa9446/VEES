'use client';

import React from 'react';
import { motion } from 'framer-motion';
 import { Zap } from 'lucide-react';

export default function Hero() {
  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    waitlistElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePitchDeck = () => {
    // Update this URL to your actual pitch deck when ready
    window.open('https://drive.google.com/your-pitch-deck-link', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-black leading-tight"
            >
              <span className="gradient-text">Energy,</span>
              <br />
              Reimagined.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300"
            >
              The <span className="text-brand-lime font-bold">₹10 Daily Caffeine Chew</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-md"
            >
              60mg of fast-acting caffeine via sublingual absorption. Pocket-sized. Zero bloat. Perfect for gym-goers, coders, and night-shift warriors.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-3 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-lime" />
                <span>Ultra-Affordable at just ₹10 vs ₹110+ energy drinks</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-cyan" />
                <span>Fast absorption in 5-10 minutes (no 40-min lag)</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-lime" />
                <span>Zero bloat. Fits in pockets, gyms, or wallets</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <button
                onClick={scrollToWaitlist}
                className="btn-primary"
              >
                Join Early Access
              </button>
              <button 
                onClick={handlePitchDeck}
                className="btn-secondary"
              >
                View Pitch Deck
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Product Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Outer glowing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-brand-lime to-brand-cyan rounded-full blur-2xl opacity-50"
              />

              {/* Product badge */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute inset-0 glass rounded-full flex items-center justify-center pulse-glow"
              >
                <div className="text-center">
                  <div className="text-6xl font-black text-brand-lime mb-2">JOLT</div>
                  <div className="text-sm text-gray-300">60mg Caffeine</div>
                  <div className="text-lg font-bold text-brand-cyan">₹10</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}