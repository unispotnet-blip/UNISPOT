import { Zap, Clock, Users, Award, Shield, Headphones } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Solutions',
    description: 'Get answers to your internet and cable problems within minutes, not hours',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'We are always here for you, day or night, weekends and holidays included',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Our certified experts have years of experience with all major providers',
  },
  {
    icon: Award,
    title: 'Results Guaranteed',
    description: '99% success rate resolving issues on the first call',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected with enterprise-level security',
  },
  {
    icon: Headphones,
    title: 'Personal Support',
    description: 'No bots, no transfers - you work with the same expert throughout',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Guidance?
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to resolve your connectivity issues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
