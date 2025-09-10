'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-wider text-neutral-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ABOUT
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-neutral-600 leading-relaxed">
                With ten years of experience, I have honed my craft through extensive training and hands-on work in various settings, including photo shoots, fashion shows, weddings, and film productions.
              </p>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                My versatile portfolio showcases a wide range of styles, from classic elegance to avant-garde experimentation, always tailored to my clients&apos; unique preferences and personalities.
              </p>
            </motion.div>

            {/* Signature or Brand Mark */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] text-neutral-400">NOELIA MKP</p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute inset-0 bg-neutral-100 rounded-sm"></div>
              <Image
                src="/images/about/noelia.png"
                alt="Noelia - Professional Makeup Artist"
                fill
                className="object-cover rounded-sm grayscale"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-neutral-300"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-neutral-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About