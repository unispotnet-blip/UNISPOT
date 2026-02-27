'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onOpenModal?: () => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Sticky background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Need Help With Your Internet or Cable?
          </h1>

          {/* Accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8" />

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            We help users understand internet and broadband service options, provide practical guidance on common connectivity issues, and offer general informational support related to cable TV services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-lg rounded-lg hover:bg-[#c9a532] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Talk to a Third-Party Advisor
            </button>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold text-lg rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Micro-text below CTA */}
          <p className="text-xs text-gray-500 italic mb-8">
            Not an ISP • No brand affiliation
          </p>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-col sm:flex-row gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37] text-xl">✓</span>
              <span>Independent Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37] text-xl">✓</span>
              <span>General Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37] text-xl">✓</span>
              <span>Informational Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
