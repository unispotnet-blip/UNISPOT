'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: "How long does it take to get help?",
    answer:
      "Most customers get connected with a technician within 5-10 minutes. For urgent issues, we have priority lines available.",
  },
  {
    question: "Do you work with all internet providers?",
    answer:
      "Yes! We support all major providers including Comcast, Verizon, AT&T, Charter, and many others.",
  },
  {
    question: "What if the issue isn't resolved?",
    answer:
      "If we can't resolve your issue, we provide a 100% refund. Your satisfaction is our guarantee.",
  },
  {
    question: "Can I get support outside business hours?",
    answer:
      "Absolutely! We offer 24/7 support. Call anytime, day or night, and we'll be ready to help.",
  },
]

export default function FAQPreviewSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to your common questions
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-secondary transition-colors text-left"
              >
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}
