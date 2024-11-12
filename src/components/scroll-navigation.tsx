'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ScrollNavigationProps {
  sections: string[];
}

export function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentIndex = sectionElements.findIndex((element, index) => {
        if (!element) return false;
        const nextElement = sectionElements[index + 1];
        
        return nextElement 
          ? scrollPosition >= element.offsetTop && scrollPosition < nextElement.offsetTop
          : scrollPosition >= element.offsetTop;
      });

      if (currentIndex !== -1) {
        setCurrentSectionIndex(currentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? Math.max(0, currentSectionIndex - 1)
      : Math.min(sections.length - 1, currentSectionIndex + 1);

    const targetSection = document.getElementById(sections[newIndex]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      /* Navigation container */
      className={cn(
        "z-50",
        "fixed right-8 top-1/2 -translate-y-1/2",
        "flex flex-col gap-2",
        "bg-white/80 backdrop-blur-sm",
        "rounded-full p-2",
        "shadow-lg"
      )}
    >
      <button
        /* Up button */
        className={cn(
          "p-2 rounded-full",
          "hover:bg-gray-100 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        onClick={() => scrollToSection('up')}
        disabled={currentSectionIndex === 0}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      
      <button
        /* Down button */
        className={cn(
          "p-2 rounded-full",
          "hover:bg-gray-100 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        onClick={() => scrollToSection('down')}
        disabled={currentSectionIndex === sections.length - 1}
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
} 