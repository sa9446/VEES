'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, Github, Twitter, Mail as MailIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-brand-lime" />
              <span className="text-2xl font-black text-brand-lime">JOLT</span>
            </div>
            <p className="text-gray-400 text-sm">
              Energy, Reimagined. The ₹10 Daily Caffeine Chew.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-lime transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-lime transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Careers</a></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-lime transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Discord</a></li>
            </ul>
          </motion.div>

          {/* Founder Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Founder</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-300 font-semibold">
                Samanvay Agrawal
              </p>
              <a 
                href="mailto:samanvay.agrawal@yahoo.com"
                className="flex items-center gap-2 text-sm text-brand-lime hover:text-brand-cyan transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                samanvay.agrawal@yahoo.com
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {currentYear} Jolt. Early-stage startup concept. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm text-gray-500"
            >
              <a href="#" className="hover:text-brand-lime transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-lime transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-lime transition-colors">FSSAI Compliance</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}