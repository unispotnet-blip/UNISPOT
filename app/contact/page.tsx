'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import CTAAndFooter from '@/components/cta-and-footer'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Talk to our experts directly',
    detail: '+1-800-000-0000',
    availability: '24/7 Available',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your question',
    detail: 'support@internetsupport.com',
    availability: 'Response in 1-2 hours',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    description: 'We are always here',
    detail: 'Round-the-Clock',
    availability: 'No days off',
  },
]

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden pt-16">
        {/* Hero */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We are here to help. Reach out to us anytime.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-lg bg-background border border-border text-center hover:border-accent transition-colors"
                  >
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="text-lg font-semibold text-foreground mb-2">
                      {method.detail}
                    </p>
                    <p className="text-sm text-accent">
                      {method.availability}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Quick Action */}
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Prefer to talk right away?
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity mr-4"
              >
                Request a Call
              </button>
              <a
                href="tel:+1-800-000-0000"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-bold text-lg hover:bg-accent/10 transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="p-8 rounded-lg bg-card border border-accent text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your message has been received. We will get back to you within 1-2 hours.
                </p>
                <p className="text-accent font-semibold">
                  In the meantime, you can also call us at +1-800-000-0000
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground rounded-lg focus:outline-none focus:border-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground rounded-lg focus:outline-none focus:border-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded-lg focus:outline-none focus:border-accent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded-lg focus:outline-none focus:border-accent"
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded-lg focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
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
