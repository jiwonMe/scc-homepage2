import React from "react";
import Image from "next/image";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col-reverse lg:flex-row items-center gap-24 ${
          imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <div className="relative aspect-[390/844]">
              <Image
                src={imageUrl}
                fill
                alt={imageAlt}
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-none">
            <div className="inline-block px-3 py-1 bg-blue-100 rounded-sm mb-6">
              <span className="text-blue-600 font-bold">{tagText}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight lg:leading-tight">
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