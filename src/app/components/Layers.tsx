"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

// Image Array
const images = [
  { src: img3, alt: "Image 3" },
  { src: img2, alt: "Image 2" },
  { src: img4, alt: "Image 1" },
];

// Component for Small Screens
function SmallScreenStack() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Animation Variants
  const containerVariants = {
    hidden: { rotateX: 30, rotateY: 0, rotateZ: -7 },
    visible: {
      rotateX: 30,
      rotateY: 0,
      rotateZ: -7,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: 100,
      y: -100,
      translateZ: index * 47,
      translateX: index * 30,
      translateY: index * 20,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      translateZ: index * 47,
      translateX: index * 30,
      translateY: index * 20,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={imageVariants}
          className="absolute top-0 left-0 rounded-lg overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            boxShadow:
              "0 4px 6px 5px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            width: `calc(100% - ${index * 20}px)`,
            zIndex: images.length - index,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
            className="object-cover w-full h-auto"
            priority
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Component for Large Screens
function LargeScreenStack() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const containerVariants = {
    hidden: { rotateX: 30, rotateY: 0, rotateZ: -7 },
    visible: {
      rotateX: 30,
      rotateY: 0,
      rotateZ: -7,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: 100,
      y: -100,
      translateZ: index * 47,
      translateX: index * 350,
      translateY: index * 20,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      translateZ: index * 47,
      translateX: index * 350,
      translateY: index * 20,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={imageVariants}
          className="absolute top-0 left-0 rounded-lg overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            boxShadow:
              "0 4px 6px 5px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            width: `calc(100% - ${index * 20}px)`,
            zIndex: images.length - index,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
            className="object-cover w-full h-auto"
            priority
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AnimatedImageStack() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section>
      <div className="mb-36" >
        <div className="flex items-center gap-2 w-full justify-center mt-20 mb-8">
        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
        <span className="text-gray-600 text-lg">Our People</span>
      </div>
      
      <div>
        <div className='md:text-5xl mb-10 text-3xl w-full text-center mt-4'>
          Our communitee
        </div>
        <p className="text-base text-center md:text-lg text-black/50 mt-6 mb-5 max-w-xl mx-auto">
        Core members who lead us to our success
        </p>
      </div>
      </div>
      <div className="relative min-h-screen overflow-hidden flex flex-col ml-0 md:p-9">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, white, transparent 10%, transparent 90%, white)",
          zIndex: 10,
        }}
      ></div>
      <div className="w-full max-w-3xl rounded-lg z-20">
        <div className="flex justify-center md:p-8">
          {isLargeScreen ? <LargeScreenStack /> : <SmallScreenStack />}
        </div>
      </div>
    </div>
    </section>
  );
}

