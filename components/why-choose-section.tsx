import { CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    title: 'No More Frustration',
    description: 'Stop wasting hours on hold or getting transferred between departments. Get direct access to an expert.',
  },
  {
    title: 'Save Your Time',
    description: 'Average resolution time is just 20 minutes. We value your time and work efficiently to solve issues fast.',
  },
  {
    title: 'Provider Independent',
    description: 'Whether you use Comcast, Verizon, AT&T or any other provider, our experts know how to help.',
  },
  {
    title: 'Real Solutions, Not Band-Aids',
    description: 'We find the root cause of your issues, not just temporary fixes. Problems stay solved.',
  },
  {
    title: 'Affordable & Transparent',
    description: 'No hidden fees, no surprise charges. You know exactly what you are paying for upfront.',
  },
  {
    title: 'Peace of Mind',
    description: 'With our guarantee, you can try our service risk-free. If you are not satisfied, we refund you.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Thousands Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Here is what sets us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2
                  size={28}
                  className="text-accent mt-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
