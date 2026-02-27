'use client';

export default function CTAAndFooter() {
  return (
    <>
      {/* Main CTA Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          {/* CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready for Independent Service Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get informational support and guidance related to internet, broadband, WiFi, and cable TV services from our independent third-party team.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-10 py-4 bg-[#d4af37] text-black font-bold text-lg rounded-lg hover:bg-[#c9a532] transition-all duration-300 transform hover:scale-105 shadow-xl">
              Request Assistance
            </button>
            <button className="px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold text-lg rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Trust line */}
          <p className="text-center text-gray-400">
            Independent Service • General Guidance • Informational Support
          </p>

          {/* Compliance Note */}
          <div className="mt-8 p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              <span className="font-semibold text-[#d4af37]">Important:</span> We are an independent third-party service assistance provider. We do not sell internet or cable plans. Our service fees are separate from provider charges.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d] pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4">Internet Assist</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Independent third-party service assistance provider offering general guidance and informational support for internet, broadband, and cable TV services.
              </p>
              <p className="text-xs text-gray-500 italic">
                Founded 2026
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/how-it-works" className="hover:text-[#d4af37] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-[#d4af37] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#d4af37] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:1-800-000-0000" className="hover:text-[#d4af37] transition-colors">
                    📞 1-800-000-0000
                  </a>
                </li>
                <li>
                  <a href="mailto:support@internetassist.com" className="hover:text-[#d4af37] transition-colors">
                    ✉️ support@internetassist.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">Business Hours: 24/7</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal & Policies</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-[#d4af37] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-[#d4af37] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-[#d4af37] transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="hover:text-[#d4af37] transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Compliance Disclosure */}
          <div className="border-t border-[#2d2d2d] pt-8 mb-8">
            <div className="bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg p-6">
              <h5 className="text-[#d4af37] font-bold text-sm mb-3 text-center">IMPORTANT DISCLOSURE</h5>
              <p className="text-gray-300 text-xs text-center leading-relaxed mb-3">
                <span className="font-semibold">Internet Assist</span> is an independent third-party service assistance provider, launched in 2026. We are <span className="font-semibold text-white">NOT affiliated with, endorsed by, or sponsored by</span> any cable, internet, or streaming service provider.
              </p>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                We do <span className="font-semibold">NOT</span> sell internet, cable, or streaming plans. We provide general guidance and assistance services only. Our service fees are separate from any provider charges. All trademarks mentioned are for informational purposes only and belong to their respective owners.
              </p>
            </div>
          </div>

          {/* Refund Policy Notice */}
          <div className="border-t border-[#2d2d2d] pt-6 mb-8">
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              <span className="font-semibold text-gray-300">Refund Policy:</span> Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether assistance has already been delivered. Please review our <a href="/refund" className="text-[#d4af37] hover:underline">Refund Policy page</a> for full eligibility details.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2d2d2d] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Internet Assist. All rights reserved. Independent Third-Party Service Provider.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
