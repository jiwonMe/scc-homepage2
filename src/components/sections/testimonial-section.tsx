"use client";


import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  userName: string;
  userType: string;
  iconUrl: string;
}

interface TestimonialSectionProps {
  title: string;
  testimonials: TestimonialProps[];
}

export function TestimonialSection({ title, testimonials }: TestimonialSectionProps) {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 부드러운 스크롤 애니메이션
  useAnimationFrame(() => {
    if (!containerRef.current) return;
    
    setScrollX(prev => {
      const newScrollX = prev - 1; // 스크롤 속도 조절
      if (!containerRef.current) return prev;
      const containerWidth = containerRef.current.scrollWidth / 2;
      
      // 절반 지점에서 처음으로 리셋
      if (-newScrollX >= containerWidth) {
        return 0;
      }
      return newScrollX;
    });
  });

  return (
    <section className={cn(
      "overflow-hidden",
      "bg-gray-100"
    )}>
      {/* Section container */}
      <div className={cn(
        "py-20 px-4",
        "container mx-auto"
      )}>
        {/* Section title */}
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold",
          "text-center mb-16"
        )}>
          {title}
        </h2>

        {/* Testimonials ticker container */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-6"
            style={{
              transform: `translateX(${scrollX}px)`,
            }}
          >
            {/* Original testimonials */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`original-${index}`} testimonial={testimonial} />
            ))}
            {/* Duplicated testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div 
      className={cn(
        /* Card styles */
        "bg-white rounded-2xl",
        "p-6",
        "flex flex-col",
        "w-[300px] shrink-0", // Fixed width and prevent shrinking
        /* Shadow and hover effects */
        "shadow-sm hover:shadow-md",
        "transition-shadow duration-200"
      )}
    >
      <p className={cn(
        "text-lg leading-relaxed",
        "mb-6 flex-1"
      )}>
        {testimonial.quote}
      </p>

      <div className={cn(
        "flex items-center",
        "gap-3"
      )}>
        <Image 
          src={testimonial.iconUrl}
          width={40}
          height={40}
          alt=""
          className="w-10 h-10"
        />
        <div>
          <p className="font-medium">{testimonial.userName}</p>
          <p className="text-blue-500">{testimonial.userType}</p>
        </div>
      </div>
    </div>
  );
}