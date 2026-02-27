'use client'

import { useState } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import WhatWeDoSection from '@/components/what-we-do-section'
import ProblemStoriesSection from '@/components/problem-stories-section'
import HowHelpWorksSection from '@/components/how-help-works-section'
import TrustSection from '@/components/trust-section'
import FeaturesSection from '@/components/features-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQPreviewSection from '@/components/faq-preview-section'
import WhyChooseSection from '@/components/why-choose-section'
import CaseStudiesSection from '@/components/case-studies-section'
import CTAAndFooter from '@/components/cta-and-footer'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import AutoPopup from '@/components/auto-popup'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <WhatWeDoSection />
        <ProblemStoriesSection />
        <HowHelpWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <CaseStudiesSection />
        <FAQPreviewSection />
        <TrustSection />
        <CTAAndFooter />
      </main>
      <FloatingCallButton onOpen={() => setModalOpen(true)} />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <AutoPopup />
    </>
  )
}
