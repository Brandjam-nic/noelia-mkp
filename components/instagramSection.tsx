"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export function InstagramSection() {
  return (
    <section id="gallery" className="relative py-16 px-4 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-6">
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-brown-400 mb-4">
            Instagram Feed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get inspired by our latest beauty transformations and behind-the-scenes moments
          </p>
        </motion.div>

        {/* Elfsight Instagram Feed Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Script 
            src="https://static.elfsight.com/platform/platform.js" 
            strategy="lazyOnload"
          />
          <div 
            className="elfsight-app-6c2fa1e0-9ad3-4760-86c8-e89d3a403684" 
            data-elfsight-app-lazy
          />
        </motion.div>

     
      </div>
    </section>
  );
}