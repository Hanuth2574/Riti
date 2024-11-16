'use client'

import React from 'react'

import SvgIcon from './SvgIcon'
import SvgIcon2 from './SvgIcon2'
export default function Component() {
  
  return (

    // <section className="relative w-full h-screen bg-gradient-to-bl from-slate-800 to-blue-950 overflow-hidden flex items-center justify-center">
    // <span className='text-[9rem] absolute bg-gradient-to-tr from-orange-500 text-transparent bg-clip-text to-yellow-300 z-40'>RITI</span>
      
    //   <motion.div
    //     className="absolute z-50"
    //     style={{ width: '1200px', height: '1200px' }}
    //     animate={{ rotate: 360 }}
    //     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    //     exit={{opacity:0}}
    //   >
    //     <Image src={rang} alt="Large Rangoli pattern" layout="fill" objectFit="cover" />
    //   </motion.div>
    //   <motion.div
    //     className="absolute"
    //     style={{ width: '700px', height: '700px' }}
    //     animate={{ rotate: -360 }}
    //     exit={{opacity:0}}

    //     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    //   >
    //     <Image src={rang} alt="Small Rangoli pattern" layout="fill" objectFit="cover" />
    //   </motion.div>
    // </section>
 


    <section className='relative overflow-hidden h-screen flex items-center justify-center'>
      <span className='absolute inset-0 flex items-center justify-center text-8xl bg-clip-text bg-gradient-to-tr from-orange-600 via-orange-500  to-yellow-100 font-bold text-transparent'>
          RITI
        </span>
      
      <div className='relative animate-[spin_20s_linear_infinite]  '>
        <SvgIcon  width="600" height="600"  />
        
      </div><div className='absolute'>
        
      <div className='inset-0 top-0  animate-[spin_20s_linear_infinite_reverse]'>
        <SvgIcon2 width='1000' height='1000' />
      </div>
      </div>
    </section>
    
  

  )
}