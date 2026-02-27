'use client';

export default function TrustSection() {
  const trustPoints = [
    {
      title: 'Certified Technicians',
      description: 'All our specialists are industry-certified and regularly trained.',
      icon: '🏆',
    },
    {
      title: 'Data Protection',
      description: 'Your personal information is encrypted and never shared.',
      icon: '🔒',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. You know costs upfront.',
      icon: '💰',
    },
    {
      title: 'Service Guarantee',
      description: 'If we can\'t help, we refund your money completely.',
      icon: '✨',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Customers Helped' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' },
    { number: '4.9★', label: 'Average Rating' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Why You Can Trust Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We've built our reputation on reliability, expertise, and genuine care for our customers.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-500/50 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance information */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">Compliance & Standards</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Security & Privacy</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>ISO 27001 Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>GDPR Compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>SSL/TLS Encryption</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Service Quality</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>Industry Certifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>Continuous Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>Quality Assurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
