'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface AutoPopupProps {
  onClose?: () => void
}

export default function AutoPopup({ onClose }: AutoPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem('popup-shown');
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('popup-shown', 'true');
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const handleCall = () => {
    window.location.href = 'tel:+1-800-555-0123'
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-xl shadow-2xl border border-[#d4af37] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-[#2d2d2d] rounded-lg transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>

          {/* Content */}
          <div className="p-8 pt-12">
            {/* Headline */}
            <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
              Need Internet or Cable Assistance?
            </h2>

            {/* Subtext */}
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              Get independent guidance for connectivity issues, setup support, or service inquiries.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleCall}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#c9a532] hover:from-[#c9a532] hover:to-[#b89929] text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
            >
              Talk to a Third-Party Advisor
            </button>

            {/* Trust Line */}
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Independent guidance • General assistance • No provider affiliation
            </p>

            {/* Compliance Disclaimer */}
            <p className="text-xs text-gray-500 text-center mt-4 pt-4 border-t border-[#2d2d2d]">
              We are an independent third-party service assistance provider • Not affiliated with, authorized by, or endorsed by any ISP or cable provider
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
