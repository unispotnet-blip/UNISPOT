'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import CTAAndFooter from '@/components/cta-and-footer'
import { Phone, FileText, CheckCircle, Zap } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'Call or Connect',
    description: 'Reach out to us via phone, chat, or through our contact form. Choose the method that is most convenient for you.',
  },
  {
    icon: FileText,
    number: '2',
    title: 'Describe Your Issue',
    description: 'Tell us what is happening with your internet or cable service. Our expert will ask clarifying questions to understand your situation.',
  },
  {
    icon: Zap,
    number: '3',
    title: 'Get Guidance',
    description: 'We will guide you through troubleshooting steps or coordinate directly with your provider. Clear, easy-to-follow instructions every step of the way.',
  },
  {
    icon: CheckCircle,
    number: '4',
    title: 'Problem Solved',
    description: 'Most issues are resolved within 20 minutes. We stay with you until your service is fully restored.',
  },
]

const details = [
  {
    title: 'Expert Analysis',
    items: [
      'Comprehensive issue diagnostics',
      'Multi-provider experience',
      'Root cause identification',
      'Preventative recommendations',
    ],
  },
  {
    title: 'Direct Support',
    items: [
      'No transfers or hold times',
      'One-on-one guidance',
      'Patient communication',
      'Follow-up assistance',
    ],
  },
  {
    title: 'Quick Results',
    items: [
      'Average 20-minute resolution',
      '99% success rate',
      'Performance verification',
      'Satisfaction guarantee',
    ],
  },
]

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="overflow-hidden pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              How Our Guidance Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A simple, straightforward process to get your internet and cable issues resolved
            </p>
          </div>
        </section>

        {/* Main Process Steps */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative">
                    {/* Connection line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-accent to-transparent" />
                    )}

                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Step {step.number}
                      </h3>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">
              What You Can Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-card border border-border"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {detail.title}
                  </h3>
                  <ul className="space-y-4">
                    {detail.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Approach */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Why This Approach Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Faster Than Traditional Support
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Traditional customer service is slow. You call your provider, wait on hold, get transferred multiple times, and still do not get help. We cut through the chaos and connect you directly with someone who can actually help.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Average resolution time: 20 minutes vs. 2+ hours with traditional support.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  More Knowledgeable
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Our experts specialize in internet and cable issues. We work with every major provider and understand the common problems that plague customers.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We do not just follow scripts - we understand the technology and find real solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our experts are standing by. Start your guidance session today.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Start Now
            </button>
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
