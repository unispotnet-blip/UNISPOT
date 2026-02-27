'use client'

import { X, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'

interface CallModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', issue: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-card rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
          <h2 className="text-xl font-bold text-foreground">Get Help Now</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Request Submitted!</h3>
              <p className="text-muted-foreground">
                We'll call you within 5 minutes
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-secondary text-foreground border border-border rounded-lg focus:outline-none focus:border-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-secondary text-foreground border border-border rounded-lg focus:outline-none focus:border-accent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-2">
                  What's the issue?
                </label>
                <select
                  id="issue"
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-secondary text-foreground border border-border rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select an issue...</option>
                  <option value="outage">Internet Outage</option>
                  <option value="slow">Slow WiFi Speed</option>
                  <option value="setup">Setup Help</option>
                  <option value="cable">Cable Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Request a Call
              </button>

              <a
                href="tel:+1-800-000-0000"
                className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Directly
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
