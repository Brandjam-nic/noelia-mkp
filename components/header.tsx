'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 p-8 z-50 bg-transparent"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <nav className="flex justify-between items-center">
        <div className="flex gap-8">
          <button className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity">
            ABOUT US
          </button>
          <button className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity">
            SERVICES
          </button>
          <button className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity">
            GALLERY
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <button className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity">
            ACCOUNT
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header