'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xyzabayw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: `New early access signup: ${email}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Error submitting form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section id="waitlist" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="gradient-text">Be the First</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join our exclusive early access waitlist and get notified when Jolt launches.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-cyan pointer-events-none" />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-lime text-white placeholder-gray-500 transition-colors"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading || submitted}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : submitted ? '✓ Success!' : 'Join Early Access'}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-brand-lime text-sm"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Thanks! Check your email for confirmation.</span>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-sm"
            >
              <span>⚠️ {error}</span>
            </motion.div>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          We respect your privacy. No spam, just launch updates.
        </motion.p>
      </div>
    </section>
  );
}