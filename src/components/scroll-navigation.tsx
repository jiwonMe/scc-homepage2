'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, ChevronsUp, ChevronsDown } from 'lucide-react';

interface ScrollNavigationProps {
  sections: string[];
  breakpoints?: { [sectionId: string]: string[] };
}

export function ScrollNavigation({ sections, breakpoints = {} }: ScrollNavigationProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentIndex = sectionElements.findIndex((element, index) => {
        if (!element) return false;
        const nextElement = sectionElements[index + 1];
        
        const sectionBreakpointIds = breakpoints[sections[index]] || [];
        if (sectionBreakpointIds.length > 0) {
          const breakpointElements = sectionBreakpointIds
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

          const breakpointIndex = breakpointElements.findIndex(el => 
            scrollPosition < el.offsetTop
          );
          
          if (breakpointIndex !== -1) {
            setCurrentBreakpoint(breakpointIndex);
          }
        }

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
  }, [sections, breakpoints]);

  const scrollToSection = (direction: 'up' | 'down' | 'top' | 'bottom') => {
    const currentSection = sections[currentSectionIndex];
    const sectionBreakpointIds = breakpoints[currentSection] || [];
    const currentElement = document.getElementById(currentSection);
    
    if (!currentElement) return;

    switch (direction) {
      case 'up': {
        if (sectionBreakpointIds.length > 0 && currentBreakpoint > 0) {
          const targetBreakpointId = sectionBreakpointIds[currentBreakpoint - 1];
          const targetElement = document.getElementById(targetBreakpointId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
            setCurrentBreakpoint(currentBreakpoint - 1);
          }
        } else {
          const newIndex = Math.max(0, currentSectionIndex - 1);
          const targetSection = document.getElementById(sections[newIndex]);
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
            });
            setCurrentBreakpoint(0);
          }
        }
        break;
      }
      case 'down': {
        if (sectionBreakpointIds.length > 0 && currentBreakpoint < sectionBreakpointIds.length - 1) {
          const targetBreakpointId = sectionBreakpointIds[currentBreakpoint + 1];
          const targetElement = document.getElementById(targetBreakpointId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
            setCurrentBreakpoint(currentBreakpoint + 1);
          }
        } else {
          const newIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
          const targetSection = document.getElementById(sections[newIndex]);
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
            });
            setCurrentBreakpoint(0);
          }
        }
        break;
      }
      case 'top':
        setCurrentBreakpoint(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'bottom':
        setCurrentBreakpoint(0);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
    }
  };

  return (
    <div 
      /* Navigation container */
      className={cn(
        "z-50",
        "fixed right-8 bottom-8",
        "flex flex-col gap-2",
        "bg-white/80 backdrop-blur-sm",
        "rounded-full p-2",
        "shadow-lg"
      )}
    >
      <button
        /* Top button */
        className={cn(
          "p-2 rounded-full",
          "hover:bg-gray-100 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        onClick={() => scrollToSection('top')}
        disabled={currentSectionIndex === 0}
      >
        <ChevronsUp className="w-6 h-6" />
      </button>

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

      <button
        /* Bottom button */
        className={cn(
          "p-2 rounded-full",
          "hover:bg-gray-100 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        onClick={() => scrollToSection('bottom')}
        disabled={currentSectionIndex === sections.length - 1}
      >
        <ChevronsDown className="w-6 h-6" />
      </button>
    </div>
  );
} 