'use client'

import { Phone } from 'lucide-react'
import { useState } from 'react'

interface FloatingCallButtonProps {
  onOpen?: () => void
}

export default function FloatingCallButton({ onOpen }: FloatingCallButtonProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <a
      href="tel:+1-800-000-0000"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Call us now"
      onClick={(e) => {
        if (onOpen) {
          e.preventDefault()
          onOpen()
        }
      }}
    >
      <Phone size={24} />
    </a>
  )
}
