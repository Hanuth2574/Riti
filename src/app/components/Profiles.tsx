'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Logo from "./Logo.png"
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    text: "From the initial consultation to launch day, Lift was a true partner. They kept us informed every step of the way and were always available to answer our questions. Our new website is user-friendly, visually stunning, and perfectly reflects our brand.",
    author: "John H",
    role: "Hiix Owner",
    rating: 5,
  },
  {
    id: 2,
    text: "Lift took our website from forgettable to fantastic! Their design team is incredibly talented, and their SEO expertise has skyrocketed our online traffic. We couldn't be happier.",
    author: "Amelie Helen",
    role: "Founder of GigaSoft",
    rating: 5,
  },
  {
    id: 3,
    text: "Working with Lift transformed our digital presence. Their expertise in design and SEO optimization delivered impressive results. The numbers speak for themselves - we've achieved a much stronger online presence.",
    author: "Michael R",
    role: "CEO of TechFlow",
    rating: 5,
  },
]

export default function Component() {
  // Calculate the width of a single set of testimonials
  const slideWidth = testimonials.length * 520 // 500px width + 20px gap

  return (
    <div className="relative w-full container overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${slideWidth}px);
          }
        }
        .scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
          display: flex;
        }
        .scroll:hover {
          animation-play-state: paused;
        }
        
        /* Add a smooth transition when animation restarts */
        @keyframes fadeInOut {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
      `}</style>

      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex items-center gap-2 w-full justify-center mt-20 mb-8">
        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
        <span className="text-gray-600 text-lg">Our workers</span>
      </div>
      
      <div>
        <div className='md:text-5xl mb-10 text-3xl w-full text-center mt-4'>
          Workers
        </div>
        <p className="text-base text-center md:text-lg text-black/50 mt-6 mb-5 max-w-xl mx-auto">
          People who provide free labour to us
        </p>
      </div>

      <div className="relative py-12 px-6">
        <div className="scroll">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`original-${testimonial.id}-${index}`}
              className="relative flex-shrink-0 md:w-[500px] rounded-2xl mx-2.5"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="shadow-md px-2 py-2 rounded-lg md:w-auto w-[300px] pr-5 pl-5 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 text-lg leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center rounded-lg z-30">
                  <div className="w-36 h-36 flex justify-center items-center overflow-hidden">
                    <Image src={Logo} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold z-30">{testimonial.author}</h3>
                    <p className="relative text-sm z-40">{testimonial.role}</p>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute orb h-20 w-20 z-10 rounded-full blur-[15px] md:h-[300px] md:w-[300px] md:top-72 top-[22rem] right-0"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          {/* Duplicate set for smooth infinite scroll */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`duplicate-${testimonial.id}-${index}`}
              className="relative flex-shrink-0 md:w-[500px] rounded-2xl mx-2.5"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="shadow-md px-2 py-2 rounded-lg md:w-auto w-[300px] pr-5 pl-5 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 text-lg leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center rounded-lg z-30">
                  <div className="w-36 h-36 flex justify-center items-center overflow-hidden">
                    <Image src={Logo} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold z-30">{testimonial.author}</h3>
                    <p className="relative text-sm z-40">{testimonial.role}</p>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute orb h-20 w-20 z-10 rounded-full blur-[15px] md:h-[300px] md:w-[300px] md:top-72 top-[22rem] right-0"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}