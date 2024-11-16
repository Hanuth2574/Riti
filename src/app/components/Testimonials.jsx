"use client"
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'framer-motion'

function Testimonials() {
    const ref = React.useRef(null)
    const ref1 = React.useRef(null)
    const ref2 = React.useRef(null)
    const ref3 = React.useRef(null)
    const ref4 = React.useRef(null)

    const isInView = useInView(ref, { once: true })
    const isInView1 = useInView(ref1, { once: true })
    const isInView2 = useInView(ref2, { once: true })
    const isInView3 = useInView(ref3, { once: true })
    const isInView4 = useInView(ref4, { once: true })
    
    return (
        <section className='container'>
            <div className="flex items-center gap-2 w-full justify-center mt-10 mb-8">
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                <span className="text-gray-600 text-lg">Services</span>
            </div>
            <div className='' >
                <div className='md:text-5xl text-3xl w-full text-center mt-4'>
                    Who are we?
                </div>
            </div>
            <div className='w-full text-center text-md mt-5 text-black/70' >
                Discover how our expertise can transform your online presence.
            </div>
            <div className='w-full mt-10 flex flex-col gap-7'>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <motion.div 
                        ref={ref}
                        initial={{ y: 100, opacity: 0, scale: 0 }}
                        animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className='bg-[#f5f5f5] gap-5 p-10 md:w-1/2 w-full h-52 rounded-xl flex flex-col'
                    >
                        <div className='text-center'>
                            <h1 className=' md:text-3xl text-2xl '>Club heads</h1>
                        </div>
                        <div className='md:text-lg text-md  text-black/70 tracking-tight mx-auto max-w-xs text-center'>
                            <span>The leaders of RITI, guiding the club&apos;s vision and direction.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref1}
                        initial={{ y: 100, opacity: 0, scale: 0 }}
                        animate={isInView1 ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className='relative overflow-hidden bg-[#f5f5f5] gap-5 p-10  md:w-1/2 w-full h-52 rounded-xl flex flex-col'
                    >
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className=" absolute orb h-20 w-20 z-10 left-[90%] rounded-full blur-[15px] bg-[conic-gradient(#f53a5d,#FB8C00,#fed0ad,#fed0ad,#f53a5d,#f53a5d)]  md:h-30 md:w-30 bottom-[80%]"
                        />
                        <div className='text-center z-30'>
                            <h1 className='text-2xl md:text-3xl'>Organizing committee</h1>
                        </div>
                        <div className='md:text-lg text-md text-black/70 tracking-tight mx-auto max-w-md  md:max-w-sm  text-center'>
                            <span>The organising team that plans and executes all events .</span>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    ref={ref2}
                    initial={{ y: 100, opacity: 0, scale: 0 }}
                    animate={isInView2 ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full overflow-hidden relative text-center p-10 bg-[#f5f5f5] h-52 rounded-xl gap-5 flex flex-col'
                >
                    <h1 className='text-2xl md:text-3xl'>Public Relations</h1>
                    <div className='md:text-lg text-md z-30 text-black/70 tracking-tight mx-auto max-w-md text-center'>
                        The creative minds who manage our online presence and engage with the college&apos;s community.
                    </div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute orb h-20 w-20 z-10 rounded-full blur-[15px] bg-[conic-gradient(#f53a5d,#FB8C00,#fed0ad,#fed0ad,#f53a5d,#f53a5d)] md:h-30 md:w-30 left-[45%] top-52"
                    />
                </motion.div>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <motion.div
                        ref={ref3}
                        initial={{ y: 100, opacity: 0, scale: 0 }}
                        animate={isInView3 ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className='bg-[#f5f5f5] gap-5 relative overflow-hidden p-10 md:w-1/2 w-full h-52 rounded-xl flex flex-col'
                    >
                        <div className='text-center'>
                            <h1 className='text-2xl md:text-3xl'>Treasurer</h1>
                        </div>
                        <div className='md:text-lg text-md text-black/70 tracking-tight mx-auto max-w-sm text-center'>
                            <span>Responsible for managing the club&apos;s finances and ensuring smooth operations</span>
                        </div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute orb h-20 w-20 z-10 rounded-full blur-[15px] bg-[conic-gradient(#f53a5d,#FB8C00,#fed0ad,#fed0ad,#f53a5d,#f53a5d)] md:h-30 md:w-30 left-0 top-52"
                        />
                    </motion.div>
                    <motion.div
                        ref={ref4}
                        initial={{ y: 100, opacity: 0, scale: 0 }}
                        animate={isInView4 ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className='bg-[#f5f5f5] gap-5 p-10 md:w-1/2 w-full h-52 rounded-xl flex flex-col'
                    >
                        <div className='text-center'>
                            <h1 className='text-2xl md:text-3xl'>Documentation Team</h1>
                        </div>
                        <div className='md:text-lg text-md text-black/70 tracking-tighter md:tracking-tight mx-auto max-w-xl text-center'>
                            <span>Captures the  photography, videography, and documentation.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials