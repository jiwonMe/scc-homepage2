import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-gray-950 text-white"
      )}
    >
      {/* Desktop & Mobile Footer Container */}
      <div className={cn(
        /* Base styles */
        "w-full",
        /* Padding for different screens */
        "px-4 lg:px-8",
        /* Spacing between sections */
        "space-y-8 lg:space-y-4"
      )}>
        {/* Navigation Links - Desktop: Horizontal, Mobile: Vertical */}
        <nav className={cn(
          /* Layout */
          "flex",
          /* Desktop: horizontal, Mobile: vertical */
          "flex-col lg:flex-row",
          /* Alignment */
          "items-start lg:items-center",
          /* Spacing */
          "space-y-4 lg:space-y-0 lg:space-x-8",
          /* Padding */
          "py-8"
        )}>
          <Link href="/" className="text-xl font-bold">계단뿌셔클럽</Link>
          <div className={cn(
            /* Link container layout */
            "flex",
            /* Desktop: horizontal, Mobile: vertical */
            "flex-col lg:flex-row",
            /* Spacing */
            "space-y-4 lg:space-y-0 lg:space-x-8"
          )}>
            <Link href="/about">소개</Link>
            <Link href="/map">계단정복지도</Link>
            <Link href="/activities">활동 함께하기</Link>
            <Link href="/support">후원</Link>
          </div>
        </nav>

        {/* Company Info Section */}
        <div className={cn(
          /* Layout */
          "flex flex-col lg:flex-row",
          /* Spacing */
          "space-y-4 lg:space-y-0",
          /* Alignment */
          "justify-between",
          /* Padding */
          "py-8"
        )}>
          {/* Copyright and Address */}
          <div className="space-y-2">
            <p>Copyright © 계단뿌셔클럽. All Rights Reserved</p>
            <p className="text-sm text-white/70">
              사업자등록번호 123-45-67890 | 대표 : 박수빈, 이대호 |<br className="lg:hidden" />
              서울특별시 강남구 테헤란로 131, 15층 (역삼동, 한국지식재산센터)
            </p>
          </div>

          {/* Additional Links */}
          <div className={cn(
            /* Layout */
            "flex",
            /* Spacing */
            "space-x-4",
            /* Text styles */
            "text-sm text-white/70"
          )}>
            <Link href="/terms">서비스 이용약관</Link>
            <Link href="/privacy">개인정보 처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 