'use client';

import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
  });
  
  // Transform scroll progress to scale value with eased motion
  const scale = useTransform(scrollYProgress, 
    [0, 1], 
    [3, 1.1],
  );
  
  // Add y-position transform for parallax effect
  const y = useTransform(scrollYProgress,
    [0, 1],
    [300, 0],
  );

  // 각 요소의 opacity 변환값 계산
  const subtitleOpacity = useTransform(scrollYProgress,
    [0, 0.2, 0.3],
    [0, 0, 1]
  );

  const titleOpacity = useTransform(scrollYProgress,
    [0.2, 0.4, 0.5],
    [0, 0, 1]
  );

  const buttonsOpacity = useTransform(scrollYProgress,
    [0.4, 0.6, 0.7],
    [0, 0, 1]
  );

  // 각 요소의 Y축 이동 변환값 계산
  const subtitleY = useTransform(scrollYProgress,
    [0, 0.2, 0.3],
    [0,0, 0]
  );

  const titleY = useTransform(scrollYProgress,
    [0.2, 0.4, 0.5],
    [0,0, 0]
  );

  const buttonsY = useTransform(scrollYProgress,
    [0.4, 0.6, 0.7],
    [0, 0, 0]
  );

  return (
    <section 
      ref={heroSectionRef}
      className={cn(
        /* Main container */
        "relative",
        "h-[300vh]",
        "w-full"
      )}
    >
      <div className={cn(
        /* Sticky container */
        "sticky",
        "top-0",
        "w-full",
        "h-screen",
        "overflow-hidden"
      )}>
        <div className="relative h-full">
          <motion.div 
            style={{ scale, y }}
            className="w-full h-full"
          >
            <Image
              src="/images/staircrusher-hero-bg-image.png"
              width={1920}
              height={1080}
              alt="Hero background"
              className={cn(
                /* Hero background image */
                "w-full h-full",
                "object-cover",
                // "brightness-50",
              )}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
          
          {/* Content container - Moved inside the relative container */}
          <div className={cn(
            /* Content container */
            "absolute inset-0", // Added positioning
            "flex flex-col items-center justify-center", // Added flex layout
            "z-10",
            "px-4"
          )}>
            <motion.p 
              style={{ opacity: subtitleOpacity, y: subtitleY }}
              className={cn(
                /* Subtitle */
                "text-base lg:text-2xl",
                "text-white/90",
                "mb-4"
              )}
            >
              이동약자와 그 친구들의 막힘없는 이동
            </motion.p>
            
            <motion.h1 
              style={{ opacity: titleOpacity, y: titleY }}
              className={cn(
                /* Main title */
                "text-4xl lg:text-7xl",
                "font-bold",
                "text-white",
                "mb-8"
              )}
            >
              계단뿌셔클럽
            </motion.h1>
            
            <motion.div 
              style={{ opacity: buttonsOpacity, y: buttonsY }}
              className={cn(
                /* Button container */
                "flex justify-center",
                "gap-4"
              )}
            >
              <CTAButton>
                소개보기
              </CTAButton>
              <CTAButton>
                앱 다운로드
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}