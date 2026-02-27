import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Professional',
    content: 'My internet was down during an important client call. They had me back online in 15 minutes. Incredible service!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    content: 'Finally someone who understands the technical side. They explained everything clearly and solved my WiFi buffering issues.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Small Business Owner',
    content: 'Saved my business during peak hours. The technician was knowledgeable and professional. Worth every penny.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Retired Teacher',
    content: 'So easy to use and the support team is patient and friendly. They treated me like family, not just a customer.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
