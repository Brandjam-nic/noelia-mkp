"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/images/make-up-artist-doing-make-up-for-the-actress-2025-08-28-09-40-43-utc.mov" type="video/mp4" />
          <source src="/images/make-up-artist-doing-make-up-for-the-actress-2025-08-28-09-40-43-utc.mov" type="video/quicktime" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Darker overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content Container - Bottom Left */}
      <div className="relative z-10 flex h-full items-end">
        <div className="p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="-mb-2 font-serif text-5xl font-light italic text-white opacity-50 transition-opacity duration-300 hover:opacity-100 cursor-pointer md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Freedom
            </h2>
            <h2 className="-mb-2 font-serif text-5xl font-light italic text-white opacity-50 transition-opacity duration-300 hover:opacity-100 cursor-pointer md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Artistry
            </h2>
            <h2 className="-mb-2 font-serif text-5xl font-light italic text-white opacity-50 transition-opacity duration-300 hover:opacity-100 cursor-pointer md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Experience
            </h2>
            <h2 className="-mb-2 font-serif text-5xl font-light italic text-white opacity-50 transition-opacity duration-300 hover:opacity-100 cursor-pointer md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Beauty
            </h2>
            <h2 className="font-serif text-5xl font-light italic text-white opacity-50 transition-opacity duration-300 hover:opacity-100 cursor-pointer md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Adaptive
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Video Controls - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleMute}
          className="rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:bg-white/20"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </section>
  )
}