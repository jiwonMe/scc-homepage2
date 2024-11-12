import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  imageUrl: string;
  imageAlt: string;
  tagText: string;
  title: string[];
  imagePosition?: 'left' | 'right';
}

export function FeatureSection({ 
  imageUrl, 
  imageAlt, 
  tagText, 
  title,
  imagePosition = 'left'
}: FeatureSectionProps) {
  return (
    <section className={cn(
      // Section container styles
      "py-20 bg-white"
    )}>
      <div className={cn(
        // Main container with padding
        "container mx-auto px-8"
      )}>
        <div className={cn(
          // Flex container layout
          "flex flex-col-reverse lg:flex-row",
          // Spacing and alignment
          "justify-center items-center gap-6 lg:gap-24",
          // Conditional flex direction based on image position
          imagePosition === 'right' && "lg:flex-row-reverse"
        )}>
          {/* Image Container */}
          <div className={cn(
            // Width responsive settings
            "w-96 lg:w-2/5",
            // Order settings for mobile/desktop
            "order-1 lg:order-none"
          )}>
            <div className={cn(
              // Aspect ratio container
              "relative aspect-[390/744]"
            )}>
              <Image
                src={imageUrl}
                fill
                alt={imageAlt}
                className={cn(
                  // Image fitting
                  "object-contain",
                  // shadow-filter
                  "drop-shadow-2xl",
                  // transition when appear
                  "transition-all duration-300 ease-in-out",
                  // transition when disappear
                  "group-hover:drop-shadow-none"
                )}
                quality={100}
              />
            </div>
          </div>
          
          {/* Text Content Container */}
          <div className={cn(
            // Width responsive settings
            "w-full lg:w-fit",
            // Text alignment responsive
            "text-left",
            // Order settings for mobile/desktop
            "order-2 lg:order-none"
          )}>
            {/* Tag Container */}
            <div className={cn(
              // Padding and display
              "w-fit px-3 py-1",
              // Background and spacing
              "bg-blue-100 rounded-sm mb-6"
            )}>
              <span className={cn(
                // Tag text styles
                "text-blue-600 font-bold"
              )}>
                {tagText}
              </span>
            </div>
            {/* Title */}
            <h2 className={cn(
              // Typography styles
              "text-3xl lg:text-4xl font-bold",
              // Spacing and line height
              "mb-4 leading-tight lg:leading-snug"
            )}>
              {title.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < title.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
} 