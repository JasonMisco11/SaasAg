"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const HeroParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Smooth the scroll input (essential for 3D rotations)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001
  });

  // --- TRANSFORMATION LOGIC ---

  // PHASE 1: Lift from Horizontal (Table) to Vertical
  // [0% to 20%]: Lifts up
  const rotateX = useTransform(smoothProgress, [0, 0.2], [75, 0]);

  // PHASE 2: The "Cool Pose" (Tilt Sideways like reference image)
  // [20% to 40%]: Tilts Z to -25deg
  // [70% to 100%]: Straightens back to 0deg
  const rotateZ = useTransform(smoothProgress, [0.2, 0.4, 0.7, 1], [0, -25, -25, 0]);

  // PHASE 3: The Spin (Show Back then Front)
  // [40% to 100%]: Full 360 spin
  const rotateY = useTransform(smoothProgress, [0.4, 1], [0, 360]);

  // SCALE: Zoom in slightly during the "Pose" phase for emphasis
  const scale = useTransform(smoothProgress, [0, 0.4, 1], [0.8, 1.1, 1]);

  // OPACITY: Fade in text only after lifting
  const textOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="h-[400vh] w-full relative bg-neutral-950 flex flex-col items-center"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center perspective-container">
        
        {/* 3D Scene Container */}
        {/* perspective-1000px gives the 3D depth. Lower number = more dramatic 3D effect */}
        <div className="relative [perspective:1000px]">
          
          <motion.div
            style={{
              rotateX,
              rotateY,
              rotateZ,
              scale,
              transformStyle: "preserve-3d", // MANDATORY: Keeps faces 3D during spin
            }}
            className="relative w-[320px] h-[200px] md:w-[500px] md:h-[315px] rounded-2xl shadow-2xl"
          >
            {/* --- FRONT FACE --- */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-white/10"
              style={{ backfaceVisibility: "hidden" }} // Hides this side when facing away
            >
              <Image 
                src="https://res.cloudinary.com/dshe5kflb/image/upload/v1767353466/Black_and_Purple_Modern_Company_Business_Card_-_1_htwsbq.jpg" 
                alt="Smart Card Front"
                fill
                className="object-cover"
                priority
              />
              
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* --- BACK FACE --- */}
            <div 
              className="absolute inset-0 w-full h-full bg-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
              style={{ 
                backfaceVisibility: "hidden", 
                transform: "rotateY(180deg)" // Initially rotated to face backwards
              }} 
            >
               <div className="absolute inset-0 bg-neutral-900">
                  <Image 
                    src="https://res.cloudinary.com/dshe5kflb/image/upload/v1767355916/Black_and_Purple_Modern_Company_Business_Card_-_2_1_gz4nma.jpg" 
                    alt="Card Back"
                    fill
                    className="object-cover opacity-60"
                  />
               </div>

               {/* "SCAN ME" Content */}
               <div className="relative z-10 flex flex-col items-center animate-pulse">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-lg mb-2 flex items-center justify-center border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-mono font-bold text-xl tracking-widest uppercase">
                    Scan Me
                  </h3>
               </div>
            </div>

          </motion.div>

          {/* Floater Text */}
          <motion.div 
            style={{ opacity: textOpacity }}
            className="absolute -bottom-28 left-0 right-0 text-center"
          >
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
               Smart Business Card
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};