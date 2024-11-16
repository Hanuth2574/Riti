import React from 'react'
import {motion} from "framer-motion"
import "./Ahero.modules.css"

function Ahero() {
  return (
    <section className="py-16 md:h-[80vh] h-[60vh] overflow-hidden relative">
      <div className="flex flex-col items-center">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl max-w-xl md:max-w-3xl md:text-7xl mx-auto tracking-tight md:font-normal">
            Elevate Your Online Presence with Lift
          </h1>
        
          <p className="text-base sm:text-sm md:text-lg text-black/70 mt-6 max-w-xl mx-auto">
            Unlock your business&apos;s full potential with tailored digital marketing strategies just for you.
          </p>

          
          <motion.button
            className="md:p-5 p-3 sm:p-2 sm:text-sm text-center rounded-full bg-black border border-b-2 text-white text-md md:text-xl mt-6"
            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
            transition={{ duration: 0.3 }}
          >
            Get started
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-y-2/3 translate-y-3/4">
          <motion.div 
            animate={{rotate: -360}} 
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}  
            className="orb h-52 w-52 rounded-full blur-[15px] bg-[conic-gradient(#f53a5d,#FB8C00,#fed0ad,#fed0ad,#f53a5d,#f53a5d)] md:h-72 md:w-72"
          />
        </div>
      </div>
    </section>
  )
}

export default Ahero