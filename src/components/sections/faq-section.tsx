"use client";

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
}

export function FAQSection({ title, description, faqs }: FAQSectionProps) {
  return (
    <section>
      {/* Section Container */}
      <div className={cn(
        /* Base container styles */
        "container mx-auto",
        /* Padding */
        "px-4 py-16 md:py-24",
        /* Max width for better readability */
        "max-w-4xl"
      )}>
        {/* Header */}
        <div className={cn(
          /* Layout */
          "flex flex-col items-center",
          /* Spacing */
          "mb-12 md:mb-16"
        )}>
          <h2 className={cn(
            /* Typography */
            "text-2xl md:text-4xl font-bold",
            /* Text alignment */
            "text-center",
            /* Spacing */
            "mb-4"
          )}>
            {title}
          </h2>
          {description && (
            <p className={cn(
              /* Typography */
              "text-base md:text-lg",
              /* Colors */
              "text-gray-600",
              /* Text alignment */
              "text-center"
            )}>
              {description}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className={cn(
          /* Layout */
          "flex flex-col",
          /* Spacing */
          "gap-4"
        )}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      /* Base styles */
      "border rounded-lg",
      /* Colors */
      "border-gray-200",
      "bg-white",
      /* Hover effect */
      "hover:bg-gray-50",
      /* Transition */
      "transition-colors duration-200"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          /* Layout */
          "flex items-center justify-between",
          /* Sizing */
          "w-full",
          /* Padding */
          "p-4 md:p-6",
          /* Typography */
          "text-left text-base md:text-lg font-medium"
        )}
      >
        <span>{question}</span>
        <ChevronDown className={cn(
          /* Icon sizing */
          "w-5 h-5",
          /* Transition */
          "transition-transform duration-200",
          /* Rotation based on state */
          isOpen && "rotate-180"
        )} />
      </button>
      
      {isOpen && (
        <div className={cn(
          /* Padding */
          "px-4 pb-4 md:px-6 md:pb-6",
          /* Typography */
          "text-gray-600"
        )}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
} 