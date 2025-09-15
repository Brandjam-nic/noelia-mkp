'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MakeupSectionProps } from '@/types'

const MakeupSection: React.FC<MakeupSectionProps> = ({
  headline = "Your skin, deeply understood",
  copy = "Noelia MKP is a professional makeup artistry service grounded in expertise and creativity, with proven techniques that enhance natural beauty and create resilient, camera-ready looks.",
  leftImageA = "/images/girl1.jpg",
  leftImageB = "/images/girl1.jpg",
  productImage = "/images/girl1.jpg",
  productImageBg
}) => {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const [mounted, setMounted] = useState(false)
  
  // Parallax transform for product image
  const productY = useTransform(
    scrollY,
    [0, 500],
    shouldReduceMotion ? [0, 0] : [0, -8]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const fadeInLeft = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.25 }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.25, delay: 0.1 }
  }

  return (
    <section 
      className="min-h-[80vh] bg-white px-6 py-16 md:px-10 lg:px-16"
      aria-labelledby="makeup-section-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[minmax(520px,44%)_1fr] lg:gap-x-16 lg:gap-y-0">
          
          {/* Left Column */}
          <motion.div 
            className="flex flex-col"
            initial={fadeInLeft.initial}
            animate={mounted ? fadeInLeft.animate : fadeInLeft.initial}
            transition={fadeInLeft.transition}
          >
            {/* Headline */}
            <h2 
              id="makeup-section-heading"
              className="mt-30 mb-30 max-w-[20ch] mx-auto text-center font-serif text-4xl leading-tight tracking-tight text-slate-800 md:text-4xl lg:text-4xl"
              style={{ fontFamily: 'var(--ff-serif, Georgia), serif' }}
            >
              {headline}
            </h2>

            {/* Image Grid */}
            <div className="mb-30 grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={leftImageA}
                  alt="Professional makeup artist at work - creating stunning bridal looks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={leftImageB}
                  alt="Beautiful makeup transformation - natural glam makeup look"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Brand Paragraph */}
            <p 
              className="mx-auto text-bold max-w-sm text-center text-sm leading-relaxed text-black"
              style={{ fontFamily: 'var(--ff-sans, system-ui), sans-serif' }}
            >
              {copy}
            </p>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div 
            className="relative flex items-center justify-center order-first lg:order-last"
            initial={fadeInRight.initial}
            animate={mounted ? fadeInRight.animate : fadeInRight.initial}
            transition={fadeInRight.transition}
          >
            {/* Background blur image (optional) */}
            {productImageBg && (
              <div className="absolute inset-0 -z-10 opacity-30 blur-xl">
                <Image
                  src={productImageBg}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Main Product Image */}
            <motion.div 
              className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl"
              style={{ y: productY }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={productImage}
                  alt="Luxury makeup products and professional makeup artistry showcase - Noelia MKP"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 800px"
                  priority
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Screen reader description */}
            <span className="sr-only">
              Premium makeup products and professional artistry tools displayed with elegant presentation
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MakeupSection