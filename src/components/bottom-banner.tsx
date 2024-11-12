import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BottomBanner() {
  return (
    <section className={cn(
      /* Base styles */
      "relative w-full bg-primary overflow-hidden bg-blue-500",
      /* Padding & height */
      "h-[433px]",
      /* Layout */
      "flex flex-col lg:flex-row py-16",
    )}>
      {/* Text Content Container */}
      <div className={cn(
        /* Layout & spacing */
        "flex flex-col items-start",
        "space-y-6 lg:space-y-8",
        /* Padding */
        "px-8 lg:px-16",
        /* Text alignment */
        "text-left",
        /* Z-index for text visibility */
        "relative z-10"
      )}>
        {/* Main Title */}
        <h2 className={cn(
          /* Text styles */
          "text-white font-semibold",
          /* Responsive font size */
          "text-2xl lg:text-4xl",
          /* Line height & word break */
          "leading-normal break-keep"
        )}>
          <span
            className="text-xl lg:text-2xl" 
          >
            막힘없는 이동의 시작,
          </span><br />
          계단뿌셔클럽과 함께<br />
          체크리스트를 채워가요!
        </h2>

        {/* CTA Buttons Container */}
        <div className={cn(
          /* Layout */
          "flex flex-row",
          /* Spacing */
          "space-x-4"
        )}>
          {/* Newsletter Button */}
          <button className={cn(
            /* Base styles */
            "flex items-center justify-center",
            /* Size & shape */
            "px-6 py-3 rounded-full",
            /* Colors */
            "bg-white text-primary",
            /* Typography */
            "text-base lg:text-lg font-medium",
            /* Hover effects */
            "hover:bg-opacity-90 transition-all"
          )}>
            <span className="mr-2">✉️</span>
            뉴스레터 &apos;뿌클레터&apos;
          </button>

          {/* Instagram Button */}
          <button className={cn(
            /* Base styles */
            "flex items-center justify-center",
            /* Size & shape */
            "px-6 py-3 rounded-full",
            /* Colors */
            "bg-white text-primary",
            /* Typography */
            "text-base lg:text-lg font-medium",
            /* Hover effects */
            "hover:bg-opacity-90 transition-all"
          )}>
            <span className="mr-2">📷</span>
            인스타그램
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className={cn(
        /* Positioning */
        "absolute bottom-0 right-0",
        /* Responsive visibility */
        "max-w-[500px] w-full lg:w-[700px]",
        /* Z-index */
        "z-0"
      )}>
        <Image 
          src="/images/bottom-banner-characters.svg"
          alt="캐릭터 이미지"
          width={400}
          height={160}
          className={cn(
            /* Image positioning */
            "object-right-bottom",
            /* Responsive sizing */
            "w-full h-full"
          )}
        />
      </div>
    </section>
  );
} 