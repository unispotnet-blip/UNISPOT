const caseStudies = [
  {
    title: 'Emergency Internet Restoration',
    client: 'Medical Office',
    problem: 'Complete internet outage during patient consultations',
    solution: 'Diagnosed modem failure and coordinated immediate replacement with ISP',
    result: 'Back online in 30 minutes, minimal patient impact',
    stat: '99% uptime restored',
  },
  {
    title: 'WiFi Performance Optimization',
    client: 'Remote Work Professional',
    problem: 'Constant video call drops and buffering',
    solution: 'Repositioned router, optimized network settings, upgraded to 5GHz',
    result: 'Crystal clear calls without interruptions',
    stat: '5x faster speed',
  },
  {
    title: 'Complete Network Setup',
    client: 'Small Business',
    problem: 'Newly opened office with no working internet setup',
    solution: 'Installed, configured, and tested complete network infrastructure',
    result: 'Business operational and secure on day one',
    stat: 'Ready in 2 hours',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results, Real Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we have helped businesses and individuals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-lg bg-background border border-border overflow-hidden hover:border-accent transition-colors"
            >
              <div className="p-6 border-b border-border">
                <div className="text-3xl font-bold text-accent mb-2">
                  {study.stat}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {study.client}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Problem
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {study.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Result
                  </h4>
                  <p className="text-sm text-accent font-medium">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
