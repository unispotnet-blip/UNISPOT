import { Check, X } from 'lucide-react'

export default function WhatWeDoSection() {
  const whatWeDo = [
    'Provide general guidance and assistance related to internet and broadband services',
    'Help you understand common connectivity issues and troubleshooting steps',
    'Guide you through service provider processes and options',
    'Offer informational support for cable TV and streaming services',
    'Assist with WiFi optimization and router configuration',
    'Help with setup and installation guidance',
  ]

  const whatWeDoNot = [
    'We are NOT an Internet Service Provider (ISP)',
    'We do NOT sell or provide internet or cable subscriptions',
    'We do NOT provide official customer support for any provider',
    'We are NOT affiliated with, authorized by, or endorsed by any telecom or cable company',
    'We do NOT guarantee specific technical fixes (results vary)',
    'We do NOT provide provider account access or technical fixes directly',
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Compliance Disclaimer Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/20 mb-4">
            <p className="text-accent text-sm font-semibold">IMPORTANT INFORMATION</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Are & What We Are Not
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To ensure transparency and clarity, here is exactly what we do and what we do not do as an independent third-party service assistance provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What We Do */}
          <div className="rounded-xl bg-card border border-border p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Check className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
            </div>

            <ul className="space-y-4">
              {whatWeDo.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Not Do */}
          <div className="rounded-xl bg-card border border-border p-8 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <X className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What We Do NOT Do</h3>
            </div>

            <ul className="space-y-4">
              {whatWeDoNot.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center">
                      <X size={14} className="text-red-500" />
                    </div>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-16 p-8 rounded-xl bg-slate-900/50 border border-slate-700 text-center">
          <p className="text-slate-300 leading-relaxed">
            <span className="font-semibold text-accent">Internet & Cable Assistance</span> is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet service provider (ISP), cable provider, or telecom company. All provider names mentioned are used strictly for informational purposes only. We provide general guidance and information related to internet, broadband, WiFi, and cable TV services.
          </p>
        </div>
      </div>
    </section>
  )
}
