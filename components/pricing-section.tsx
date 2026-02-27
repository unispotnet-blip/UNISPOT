import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Single Call',
    price: '29',
    description: 'One-time guidance for a specific issue',
    features: [
      'Expert consultation',
      'Same-day resolution',
      'Phone support',
      'Follow-up advice',
    ],
  },
  {
    name: 'Monthly Plan',
    price: '99',
    description: 'Unlimited guidance for a full month',
    features: [
      'Unlimited calls',
      'Priority support',
      'Phone & chat access',
      'Monthly system review',
      'Email support',
    ],
    highlighted: true,
  },
  {
    name: 'Annual Plan',
    price: '899',
    description: 'Best value for continuous support',
    features: [
      'Unlimited calls',
      'Priority 24/7 support',
      'Phone, chat & email',
      'Quarterly reviews',
      'Dedicated support line',
      '30% savings',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border transition-all ${
                plan.highlighted
                  ? 'border-accent bg-background ring-2 ring-accent scale-105 shadow-xl'
                  : 'border-border bg-card hover:border-accent'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6 h-10">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">
                  ${plan.price}
                </span>
                {plan.price !== '29' && (
                  <span className="text-muted-foreground ml-2">/month</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all ${
                  plan.highlighted
                    ? 'bg-accent text-accent-foreground hover:opacity-90'
                    : 'bg-secondary text-foreground hover:bg-border'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
