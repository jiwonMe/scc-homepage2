import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ClubFeatureSectionProps {
  title: string;
  features: FeatureItem[];
}

export function ClubFeatureSection({
  title,
  features
}: ClubFeatureSectionProps) {
  return (
    <section className={cn(
      // Section container styles
      "w-full py-24 bg-white"
    )}>
      <div className={cn(
        // Main container with padding
        "container mx-auto px-4"
      )}>
        {/* Section Title */}
        <h2 className={cn(
          // Typography styles
          "text-3xl font-bold text-center",
          // Spacing
          "mb-16"
        )}>
          {title}
        </h2>

        {/* Features Grid */}
        <div className={cn(
          // margin
          "mx-auto",
          // Grid layout
          "grid grid-cols-1 md:grid-cols-2",
          // Grid spacing
          "gap-8",
          // Responsive padding
          // "md:px-32",
          // Responsive max width
          "md:max-w-4xl"
        )}>
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={cn(
                // Card container
                "flex flex-col",
                // Spacing and alignment
                "items-center"
              )}
            >
              {/* Feature Image */}
              <div className={cn(
                // Image container
                "relative w-full aspect-[4/3]",
                // Spacing
                "mb-6",
                // Border radius
                "rounded-lg overflow-hidden"
              )}>
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  className={cn(
                    // Image fitting
                    "object-cover",
                    // Transition
                    "transition-transform duration-300",
                    // Hover effect
                    "hover:scale-105"
                  )}
                />
              </div>

              {/* Feature Number */}
              <span className={cn(
                // Typography styles
                "text-blue-500 font-bold",
                // Spacing
                "mb-2"
              )}>
                {String(feature.id).padStart(2, '0')}
              </span>

              {/* Feature Title */}
              <h3 className={cn(
                // Typography styles
                "text-xl font-bold text-gray-900",
                // Spacing
                "mb-2"
              )}>
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className={cn(
                // Typography styles
                "text-gray-600 text-center",
                // Line height
                "leading-relaxed"
              )}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 