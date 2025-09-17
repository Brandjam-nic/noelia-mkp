'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 p-8 z-50 bg-transparent"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <nav className="flex justify-between items-center">
        <div className="flex gap-8">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
          >
            ABOUT US
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
          >
            SERVICES
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, 'gallery')}
            className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
          >
            GALLERY
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <Link href="/contact" className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity">
            CONTACT
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header