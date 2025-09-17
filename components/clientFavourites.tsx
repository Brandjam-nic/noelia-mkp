'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Service, ClientFavouritesProps } from '@/types'

const DEFAULT_SERVICES: Service[] = [
  {
    id: 'srv-photoshoot',
    title: 'Photoshoot',
    blurb: 'HD-ready glam that holds under studio lights.',
    features: [
      'Flawless base',
      'Long-wear finish',
      'On-set touch-ups available'
    ],
    duration: '60–90 min',
    priceFrom: 'From $180',
    image: '/images/hero/girl1.jpg',
    layout: 'feature',
    alt: 'Makeup artist perfecting a model for a studio photoshoot'
  },
  {
    id: 'srv-film-tv',
    title: 'Film & Television',
    blurb: 'Camera-safe complexion with continuity in mind.',
    features: [
      'Shine control',
      'Transfer-safe formulas',
      'Continuity notes'
    ],
    duration: '60–120 min',
    priceFrom: 'From $220',
    image: '/images/hero/girl3.jpg',
    layout: 'feature',
    alt: 'Film and TV set with makeup artist doing on-set touch-ups'
  },
  {
    id: 'srv-wedding',
    title: 'Wedding',
    blurb: 'Timeless bridal glam designed to last all day.',
    features: [
      'Bridal trial option',
      'Touch-up kit',
      'Bridal party add-ons'
    ],
    duration: '~90 min',
    priceFrom: 'From $280',
    image: '/images/about/girl2.jpg',
    layout: 'feature',
    alt: 'Bride with elegant, long-lasting bridal makeup'
  }
]

const ClientFavourites: React.FC<ClientFavouritesProps> = ({ 
  services = DEFAULT_SERVICES 
}) => {
  const shouldReduceMotion = useReducedMotion()

  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    transition: { 
      duration: shouldReduceMotion ? 0.2 : 0.45,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section 
      className="relative bg-gray-50 py-[88px] px-6 md:px-10 lg:px-16"
      aria-labelledby="client-favourites-heading"
    >
      <div className="max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Text Rail - Sticky */}
          <div className="lg:w-[50%] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <motion.div 
                className="flex flex-col justify-start"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ 
              duration: shouldReduceMotion ? 0.2 : 0.45,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <h2 
              id="client-favourites-heading"
              className="mb-6 font-serif text-4xl leading-tight tracking-tight text-gray-900 md:text-5xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Client Favourites
            </h2>
            
            <p className="mb-8 text-base leading-relaxed text-gray-700 max-w-sm">
              Our most-booked looks, crafted to perform under studio lights and real life.
            </p>
            
            <Link 
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-gray-600 transition-colors hover:text-gray-900"
            >
              Discover Services
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Masonry Grid */}
          <div className="lg:flex-1">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-[8px]"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((service, index) => {
              const rowSpan = service.layout === 'feature' ? 'row-span-[24]' : 'row-span-[14]'
              
              return (
                <motion.article
                  key={service.id}
                  className={`${rowSpan} group`}
                  variants={fadeInUp}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="block h-full"
                    aria-label={`View ${service.title} service`}
                  >
                    <div className="relative h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                      {/* Service Image */}
                      <div className={`relative ${service.layout === 'feature' ? 'h-[380px]' : 'h-[160px]'}`}>
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Service Details */}
                      <div className="p-6">
                        <h3 className="mb-2 font-serif text-xl font-medium text-gray-900">
                          {service.title}
                        </h3>
                      

                        {/* Features - only show on feature layout */}
                        {service.layout === 'feature' && (
                          <ul className="mb-4 space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-gray-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-gray-600 group-hover:text-gray-900 transition-colors">
                          Book now
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientFavourites