'use client';

export default function ProblemStoriesSection() {
  const stories = [
    {
      id: 1,
      title: 'Internet Outages',
      description: 'When your internet goes down, time is money. We help you get back online fast.',
      image: '/internet-outage.jpg',
      icon: '📡',
    },
    {
      id: 2,
      title: 'Slow WiFi',
      description: 'Buffering, lag, and weak signals disrupt your productivity. We optimize your setup.',
      image: '/slow-wifi.jpg',
      icon: '🔌',
    },
    {
      id: 3,
      title: 'Setup Issues',
      description: 'Complex installations and configurations don\'t have to be frustrating.',
      image: '/setup-issues.jpg',
      icon: '⚙️',
    },
    {
      id: 4,
      title: 'Cable Problems',
      description: 'Technical glitches and service interruptions resolved by experts.',
      image: '/cable-issues.jpg',
      icon: '🎬',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          Real Problems, Real Solutions
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          We understand the frustrations that come with connectivity issues. Here's how we help.
        </p>
      </div>

      {/* Stories grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative overflow-hidden rounded-xl h-96 cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="text-3xl mb-3">{story.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-gray-200 leading-relaxed">{story.description}</p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>
    </section>
  );
}
