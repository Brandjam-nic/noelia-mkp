"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Volume2, VolumeX } from 'lucide-react'

const menuItems = [
  { id: 'bridal', label: 'Bridal Makeup', description: 'Flawless looks for your special day' },
  { id: 'editorial', label: 'Editorial', description: 'High-fashion and creative makeup' },
  { id: 'special', label: 'Special Events', description: 'Glamorous looks for any occasion' },
  { id: 'masterclass', label: 'Masterclasses', description: 'Learn professional techniques' },
]

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/makeup-showcase.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-white md:text-7xl">
            Artistry in Motion
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Experience the transformation through our signature makeup services
          </p>
        </motion.div>

        {/* Hover Menu Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20">
                <div className="relative z-10">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.label}
                  </h3>

                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-white/80"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          <button
            onClick={togglePlay}
            className="rounded-full bg-white/20 p-3 backdrop-blur-md transition-all hover:bg-white/30"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <div className="flex h-5 w-5 items-center justify-center gap-1">
                <div className="h-4 w-1.5 bg-white" />
                <div className="h-4 w-1.5 bg-white" />
              </div>
            ) : (
              <Play className="h-5 w-5 text-white" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="rounded-full bg-white/20 p-3 backdrop-blur-md transition-all hover:bg-white/30"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-white" />
            ) : (
              <Volume2 className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}