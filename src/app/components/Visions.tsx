"use client"
import React, {  useRef } from 'react'   
import Lottie from 'react-lottie-player'
import pencil from "./pencil.json"
import cloth from "./cloth.json"
import {motion,useInView} from "framer-motion"
function Visions() {
    const ref = useRef(null);
    const isInView=useInView(ref)
    // useEffect(() => {
    //     // Play animation every 5 seconds
    //     const interval = setInterval(() => {
    //         setPlay(true);
    //         setTimeout(() => setPlay(false), 1000); // Stop playback after 1 second to reset
    //     }, 5000);  // 5000 milliseconds = 5 seconds

    //     return () => clearInterval(interval); // Cleanup interval on unmount
    // }, []);
  return (
    <section className='mt-32' >
        <div className='container' >
        <div className="flex items-center gap-2 w-full justify-center mt-10 mb-8">
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                <span className="text-gray-600 text-md md:text-lg">Our Goals</span>
            </div>
            <div className='' >
                <div className='md:text-5xl mb-10 text-3xl w-full text-center mt-4'>
                    Who are we?
                </div>
            </div>
            <div className='flex flex-col'>
                <div  className='flex md:flex-row flex-col  gap-5' >
                    <motion.div ref={ref} initial={{x:-100,opacity:0}} animate={isInView?{x:0,opacity:1}:{x:-100,opacity:0}} transition={{duration:0.5}} className='flex flex-col gap-5 w-full h-[450px]  md:w-1/2 bg-[#f5f5f5] rounded-3xl p-8 md:h-[450px]' >
                        <div className='md:text-3xl text-xl' >
                            Designers
                        </div>
                        <div className='mx-auto max-w-xl md:text-lg text-md' >
                        Transform discarded clothes into new and exciting garments
                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                         Experiment with different techniques like embroidery, patchwork, and dyeing.
                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                        Create unique and sustainable fashion pieces.                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                        Embrace upcycling as a form of creative expression.                        </div>
                        <div className='w-full bg-black flex relative'>
                        <div className='h-12 w-12 md:h-16 absolute right-0  md:w-16' >
                            <Lottie loop={true} play={true} animationData={pencil} />
                        </div>
                        </div>
                    </motion.div>
                    <motion.div ref={ref} initial={{x:100,opacity:0}} animate={isInView?{x:0,opacity:1}:{x:100,opacity:0}} transition={{duration:0.5}} className='flex flex-col gap-5 w-full h-[450px]  md:w-1/2 bg-[#f5f5f5] rounded-3xl p-8 md:h-[450px]' >
                        <div className='md:text-3xl text-xl' >
                        Stylists
                        </div>
                        <div className='mx-auto max-w-xl text-xl' >
                        Showcase the upcycled creations through captivating styling.                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                        Create cohesive looks that highlight the unique designs                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                        Create unique and sustainable fashion pieces.                        </div>
                        <div className=' max-w-sm text-md md:text-lg' >
                        Embrace upcycling as a form of creative expression.                        </div>
                        <div className='w-full bg-black flex relative'>
                        <div className='md:h-16 absolute right-0  h-12 w-12 md:w-16' >
                            <Lottie loop={true} play={true} animationData={cloth} />
                        </div>
                        </div>
                    </motion.div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Visions