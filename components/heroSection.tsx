'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div className="flex h-full">
        {/* Left */}
        <motion.div
          className="relative w-1/2 h-full overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/images/hero/Girl3.png"
            alt="Professional makeup artist Noelia working with client - bridal makeup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-start justify-start pl-4 sm:pl-8 pt-20 sm:pt-4 overflow-hidden">
            <h1 className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-medium tracking-wider whitespace-nowrap">
              NOELIA
            </h1>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="relative w-1/2 h-full overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/images/hero/heroMkp1.webp"
            alt="Luxury makeup products and professional makeup tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-start justify-end pr-4 sm:pr-8 pt-20 sm:pt-4 overflow-hidden">
            <h1 className="text-white text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-medium tracking-wider whitespace-nowrap">
              MKP
            </h1>
          </div>
        </motion.div>
      </div>



      {/* Bottom branding */}
      <motion.div
        className="absolute bottom-8 left-8 z-20 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-white/80 text-s leading-relaxed">
          With over 10 years of professional experience across weddings, fashion shows, photoshoots, and film productions, I create looks that inspire confidence and capture individuality. From timeless elegance to bold, avant-garde styles, every detail is customised to reflect you.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection