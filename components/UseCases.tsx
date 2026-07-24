'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Code2, Route } from 'lucide-react';

const useCases = [
  {
    icon: Dumbbell,
    title: 'Pre-Workout Fuel',
    description: 'Quick 60mg kick 10 minutes before hitting the gym floor. No bloat, pure performance.',
    color: 'brand-lime',
  },
  {
    icon: Code2,
    title: 'All-Nighter Focus',
    description: 'Zero-fuss caffeine for late-night coding sessions and exam cramming marathons.',
    color: 'brand-cyan',
  },
  {
    icon: Route,
    title: 'Daily Commute',
    description: 'Pocket-friendly alertness without hunting for a coffee shop during your morning rush.',
    color: 'brand-lime',
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="gradient-text">Built for Your Lifestyle</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're grinding at the gym, pulling an all-nighter, or just need a quick pick-me-up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const isLime = useCase.color === 'brand-lime';
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -5 }}
                className="glass-hover rounded-2xl p-8 space-y-4 group cursor-pointer border-2 border-transparent hover:border-brand-lime transition-all"
              >
                <div className={`w-16 h-16 glass rounded-lg flex items-center justify-center ${isLime ? 'text-brand-lime' : 'text-brand-cyan'} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-white">
                  {useCase.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-semibold">
                  <span className={isLime ? 'text-brand-lime' : 'text-brand-cyan'}>Learn more</span>
                  <span className="text-xl">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
