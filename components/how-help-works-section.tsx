'use client';

export default function HowHelpWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Issue',
      description: 'Tell us what\'s happening with your internet or cable service.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Expert Analysis',
      description: 'Our specialists diagnose the problem using proven methodologies.',
      icon: '🔍',
    },
    {
      number: '03',
      title: 'Guided Solution',
      description: 'We walk you through fixes step-by-step or handle it for you.',
      icon: '🎯',
    },
    {
      number: '04',
      title: 'Full Resolution',
      description: 'Get back online with confidence and ongoing support.',
      icon: '✅',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            How Our Guidance Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A streamlined process designed to solve your connectivity issues quickly and effectively.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
                {/* Step number */}
                <div className="text-4xl font-bold text-yellow-500 mb-2">{step.number}</div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-800 to-transparent transform -translate-y-1/2" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Resolution</h3>
            <p className="text-gray-400">Most issues solved within hours, not days.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
            <p className="text-gray-400">Real agents with years of technical expertise.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Local Knowledge</h3>
            <p className="text-gray-400">Familiar with regional service providers and issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
