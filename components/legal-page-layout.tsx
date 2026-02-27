'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import CTAAndFooter from '@/components/cta-and-footer'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="overflow-hidden pt-16">
        {/* Hero */}
        <section className="py-16 px-4 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto prose prose-invert max-w-none text-foreground">
            {children}
          </div>
        </section>

        <CTAAndFooter />
      </main>

      <FloatingCallButton onOpen={() => setModalOpen(true)} />
      <StickyCallBar onOpenModal={() => setModalOpen(true)} />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
