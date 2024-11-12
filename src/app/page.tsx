import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { CTAButton } from "@/components/ui/cta-button";
import { FeatureSection } from "@/components/sections/feature-section";
import Footer from "@/components/footer";
import BottomBanner from "@/components/bottom-banner";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ClubFeatureSection } from "@/components/sections/club-feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ScrollNavigation } from "@/components/scroll-navigation";

export default function Home() {
  const testimonials = [
    {
      quote: "처음에 뭐라고 검색할지 모르겠어요. 접근성 기준으로 찾기 쉬운 서비스가 필요해요",
      userName: "그리서 이물",
      userType: "이동보조기기 이용자",
      iconUrl: "/images/testimonial-icon-1.png"
    },
    {
      quote: "이제 일단 여기서 검색하고, 네**으로 길찾기 해야겠네요!",
      userName: "김영희",
      userType: "유아차 이용자",
      iconUrl: "/images/testimonial-icon-2.png"
    },
    {
      quote: "이제 일단 여기서 검색하고, 네**으로 길찾기 해야겠네요!",
      userName: "김영희",
      userType: "유아차 이용자",
      iconUrl: "/images/testimonial-icon-3.png"
    },

  ];

  const faqData = {
    title: "자주 묻는 질문",
    // description: "고객님들이 자주 문의하시는 내용입니다.",
    faqs: [
      {
        question: "접근 레벨은 어떤 기준으로 산정되나요?",
        answer: "접근레벨은 어쩌구 저쩌구를 기준으로 계산된 값입니다. 기준에 따라서 어쩌구 저쩌구 입니다."
      },
      {
        question: "크러셔 클럽에 참여하고 싶어요",
        answer: "크러셔 클럽은 어쩌구 저쩌구한 프로그램입니다. 참여 방법은 어쩌구 저쩌구 합니다."
      },
      {
        question: "환불 정책은 어떻게 되나요?",
        answer: "구매 후 7일 이내에 어쩌구 저쩌구한 경우에 환불이 가능합니다."
      }
    ]
  };

  const clubFeatures = [
    {
      id: "01",
      title: "크러셔 클럽",
      description: "북/카풀 크루들과 함께 문제해결철 멤버십",
      imageUrl: "/images/feature-1.png"
    },
    {
      id: "02",
      title: "객원 에디터 활동",
      description: "이동약자와 그 친구들이 직접 남기는 정리뷰를 통해 더 많은 정소를 발견해요",
      imageUrl: "/images/feature-2.png"
    },
    {
      id: "03",
      title: "파트너 프로그램",
      description: "기관, 단체, 캠페인 등과 함께 계단정복지도, 뽀글로드를 만들어요",
      imageUrl: "/images/feature-3.png"
    },
    {
      id: "04",
      title: "후원",
      description: "계단뿌셔클럽이 더 많은 친구들과 우정을 나눌 수 있도록 응원을 보태주세요.",
      imageUrl: "/images/feature-4.png"
    }
  ];

  const sections = [
    'hero',
    'info',
    'feature-1',
    'feature-2',
    'feature-3',
    'testimonials',
    'club-features',
    'faq'
  ];

  const breakpoints = {
    'hero': ['#main'],
    'club-features': ['feature1', 'feature2', 'feature3', 'feature4'],
  };

  return (
    <div className="min-h-screen">
      <ScrollNavigation sections={sections} breakpoints={breakpoints} />
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="info" className="py-20 bg-[#22314A]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl lg:text-4xl text-white font-bold leading-loose lg:leading-loose break-keep">
            접근성 정보를 쉽게 찾고, 이동을 시작하세요. <br />
            지금까지 경험해보지 못한 접근성 중심 탐색 서비스, <br />
            계단뿌셔클럽을 통해, 이동을 쉽게 생각하게 될 거에요. 
            </p>
          </div>
        </div>
      </section>
      <section id="feature-1">
        <FeatureSection 
          imageUrl="/images/map-feature-image.png"
          imageAlt="접근성 지도 기능"
          tagText="접근레벨 탐색"
          title={[
            "접근 난이도,",
            "지도와 필터를 통해",
            "한눈에 체크해요"
          ]}
          imagePosition="left"
        />
      </section>
      <section id="feature-2">
        <FeatureSection 
          imageUrl="/images/place-feature-image.png"
          imageAlt="계단/경사로 정보"
          tagText="계단/경사로 정보"
          title={[
            "이동약자와 친구들이",
            "직접 모은 구체적인 정보로",
            "시간을 아끼세요"
          ]}
          imagePosition="right"
        />
      </section>
      <section id="feature-3">
        <FeatureSection 
          imageUrl="/images/place-review-feature-image.png"
          imageAlt="이동약자 리뷰 기능"
          tagText="이동약자 리뷰"
          title={[
            "휠체어/유아차로",
            "직접 다녀온 장소 리뷰",
          ]}
          imagePosition="left"
        />
      </section>
      <section id="testimonials">
        <TestimonialSection 
          title="이용자들의 한마디" 
          testimonials={testimonials} 
        />
      </section>
      <section id="club-features">
        <ClubFeatureSection
          title="계단뿌셔클럽을 함께 만드는 법"
          features={clubFeatures}
        />
      </section>
      <section id="faq">
        <FAQSection {...faqData} />
      </section>
      <BottomBanner />
      <Footer />
    </div>
  );
}