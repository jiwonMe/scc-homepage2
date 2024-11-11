import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { CTAButton } from "@/components/ui/cta-button";
import { FeatureSection } from "@/components/sections/feature-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Navbar />
        <div className="absolute inset-0">
          <Image
            src="/images/staircrusher-hero-bg-image.png"
            width={1920}
            height={1080}
            alt="Hero background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-base md:text-2xl text-white/90 mb-4">
            이동약자와 그 친구들의 막힘없는 이동
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
            계단뿌셔클럽
          </h1>
          <div className="flex justify-center gap-4">
            <CTAButton>
              소개보기
            </CTAButton>
            <CTAButton>
              앱 다운로드
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-[#22314A]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-4xl text-white font-bold leading-loose md:leading-loose">
            접근성 정보를 쉽게 찾고, 이동을 시작하세요. <br />
            지금까지 경험해보지 못한 접근성 중심 탐색 서비스, <br />
            계단뿌셔클럽을 통해, 이동을 쉽게 생각하게 될 거에요. 
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 01 */}
      <FeatureSection 
        imageUrl="/images/map-feature.png"
        imageAlt="접근성 지도 기능"
        tagText="접근레벨 탐색"
        title={[
          "접근 난이도,",
          "지도와 필터를 통해",
          "한눈에 체크해요"
        ]}
        imagePosition="left"
      />
      {/* Feature Section 02 */}
      <FeatureSection 
        imageUrl="/images/map-feature.png"
        imageAlt="접근성 지도 기능"
        tagText="접근레벨 탐색"
        title={[
          "접근 난이도,",
          "지도와 필터를 통해",
          "한눈에 체크해요"
        ]}
        imagePosition="right"
      />
      {/* Feature Section 03 */}
      <FeatureSection 
        imageUrl="/images/map-feature.png"
        imageAlt="접근성 지도 기능"
        tagText="접근레벨 탐색"
        title={[
          "접근 난이도,",
          "지도와 필터를 통해",
          "한눈에 체크해요"
        ]}
        imagePosition="left"
      />
    </div>
  );
}