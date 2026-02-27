'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import CTAAndFooter from '@/components/cta-and-footer'
import { ChevronDown } from 'lucide-react'

const faqCategories = [
  {
    name: "About Our Service",
    faqs: [
      {
        question: "Are you an official cable or internet service provider?",
        answer:
          "No. We are an independent third-party assistance platform launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.",
      },
      {
        question: "Do you sell internet, cable, or streaming plans?",
        answer:
          "No. We provide guidance and informational assistance only. We do not sell or provide internet, cable, or streaming subscriptions.",
      },
      {
        question: "Do you charge for your services?",
        answer:
          "Yes. Our service fees are separate from provider charges. We charge for the assistance and guidance we provide, which is independent from any service provider billing.",
      },
      {
        question: "Will I still be billed by my service provider?",
        answer:
          "Yes. Provider billing remains unchanged. Our fees are for our independent assistance services only and do not replace or modify your provider's billing.",
      },
    ],
  },
  {
    name: "Services & Support",
    faqs: [
      {
        question: "What types of issues can you help with?",
        answer:
          "We provide general guidance and informational support related to internet, broadband, WiFi, and cable TV services. This includes helping you understand connectivity issues, service options, and common troubleshooting approaches.",
      },
      {
        question: "Which providers do you support?",
        answer:
          "We may reference multiple providers for guidance purposes only. We have no affiliation with any specific provider. All provider names, if mentioned, are used strictly for informational purposes and include their respective ™ or ® trademarks.",
      },
      {
        question: "Do you need my account passwords or sensitive information?",
        answer:
          "No. We never request provider passwords or sensitive account credentials. We provide guidance without requiring access to your provider accounts.",
      },
      {
        question: "How long does it take to get assistance?",
        answer:
          "Most customers connect with our assistance team within 5-10 minutes during business hours. Response times may vary based on call volume.",
      },
    ],
  },
  {
    name: "Refund Policy",
    faqs: [
      {
        question: "Are your services refundable?",
        answer:
          "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review our Refund Policy page for full eligibility details.",
      },
      {
        question: "What affects refund eligibility?",
        answer:
          "Refund eligibility depends on the service type and whether assistance has already been delivered. Detailed terms are outlined in our Refund Policy.",
      },
      {
        question: "How do I request a refund?",
        answer:
          "You can submit a refund request through our Contact page or by calling our support line. Please have your service details ready for faster processing.",
      },
      {
        question: "Are refunds unconditional?",
        answer:
          "Refunds are subject to the terms outlined in our Refund Policy. We evaluate each request based on service type, delivery status, and the timeframe specified in our policy.",
      },
    ],
  },
  {
    name: "Security & Privacy",
    faqs: [
      {
        question: "Is my personal information secure?",
        answer:
          "Yes. We use enterprise-level encryption and security measures. Your data is protected under our Privacy Policy and is never shared with third parties without your consent.",
      },
      {
        question: "What information do you collect?",
        answer:
          "We collect basic information such as your name, phone number, email, and details about your inquiry. We do not require access to provider accounts or sensitive financial information.",
      },
      {
        question: "Do you record calls?",
        answer:
          "Calls may be recorded for quality assurance and training purposes. You will be informed at the start of your call if recording is taking place.",
      },
      {
        question: "How do you handle my data?",
        answer:
          "Your data is stored securely and handled in accordance with our Privacy Policy. We comply with all applicable privacy laws and regulations.",
      },
    ],
  },
  {
    name: "General Information",
    faqs: [
      {
        question: "When was your company founded?",
        answer:
          "We are a newly launched independent service assistance startup, founded in 2026.",
      },
      {
        question: "Do you have partnerships with any providers?",
        answer:
          "No. We are an independent third-party service and do not have partnerships, affiliations, or endorsements from any internet, cable, or streaming service provider.",
      },
      {
        question: "Can I get support outside business hours?",
        answer:
          "We offer extended support hours. Please check our Contact page for current availability or call our support line to verify hours.",
      },
      {
        question: "How can I contact you?",
        answer:
          "You can reach us through our Contact page, by phone, or by email. All contact information is available in the footer of every page and on our Contact page.",
      },
    ],
  },
]

export default function FAQ() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({})

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const toggleFAQ = (faqKey: string) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }))
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden pt-16">
        {/* Hero */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            {/* Compliance Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <p className="text-accent text-xs font-semibold">INDEPENDENT THIRD-PARTY SERVICE • FOUNDED 2026</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions. Can't find what you are looking for?{' '}
              <button
                onClick={() => setModalOpen(true)}
                className="text-accent hover:text-opacity-80 font-semibold"
              >
                Contact us
              </button>
            </p>

            {/* Compliance Disclosure */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-accent/30">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">Important:</span> We are an independent third-party service assistance provider, launched in 2026, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-secondary transition-colors"
                >
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <ChevronDown
                    size={24}
                    className={`text-accent transition-transform ${
                      openCategories[category.name] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openCategories[category.name] && (
                  <div className="border-t border-border bg-background">
                    <div className="divide-y divide-border">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqKey = `${category.name}-${faqIndex}`
                        return (
                          <div key={faqIndex}>
                            <button
                              onClick={() => toggleFAQ(faqKey)}
                              className="w-full px-6 py-4 flex items-start justify-between hover:bg-card/50 transition-colors text-left"
                            >
                              <span className="font-semibold text-foreground pr-4">
                                {faq.question}
                              </span>
                              <ChevronDown
                                size={20}
                                className={`text-accent flex-shrink-0 mt-1 transition-transform ${
                                  openFAQs[faqKey] ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {openFAQs[faqKey] && (
                              <div className="px-6 py-4 bg-card/50 border-t border-border">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is ready to help with any questions or concerns you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Support
              </button>
              <a
                href="tel:+1-800-000-0000"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Call Now
              </a>
            </div>
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
