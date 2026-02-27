'use client'

import { Phone } from 'lucide-react'
import { useState } from 'react'

interface StickyCallBarProps {
  onOpenModal?: () => void
}

export default function StickyCallBar({ onOpenModal }: StickyCallBarProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-accent text-accent-foreground py-3 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Phone size={20} />
          <div className="text-sm sm:text-base font-medium">
            <p>Need help right now?</p>
            <p className="text-xs sm:text-sm opacity-90">24/7 Support Available</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+1-800-000-0000"
            className="px-4 py-2 bg-accent-foreground text-accent rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base"
          >
            Call Now
          </a>
          <button
            onClick={() => {
              if (onOpenModal) {
                onOpenModal()
              }
            }}
            className="px-3 py-2 bg-accent-foreground/20 hover:bg-accent-foreground/30 rounded-lg transition-colors whitespace-nowrap text-sm sm:text-base"
          >
            Chat
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="px-2 py-2 hover:opacity-70 transition-opacity"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
