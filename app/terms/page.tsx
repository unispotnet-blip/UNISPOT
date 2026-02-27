import LegalPageLayout from '@/components/legal-page-layout'

export default function Terms() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="February 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using this website and our services, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not agree to abide by
            the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            2. Use License
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information
            or software) on our website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Modify or copy the materials</li>
            <li>• Use the materials for any commercial purpose outside our services</li>
            <li>• Attempt to decompile or reverse engineer any software</li>
            <li>• Remove any copyright or proprietary notations</li>
            <li>• Transfer the materials to another person</li>
            <li>• Use the materials for any illegal purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            3. Disclaimer of Warranties
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials on our website are provided on an "as is" basis. Internet Support
            Solutions makes no warranties, expressed or implied, and hereby disclaims and negates
            all other warranties including, without limitation, implied warranties or conditions
            of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            4. Limitations of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall Internet Support Solutions or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use the materials on
            our website, even if we or an authorized representative has been notified orally or
            in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            5. Accuracy of Materials
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on our website could include technical, typographical, or
            photographic errors. Internet Support Solutions does not warrant that any of the
            materials on our website are accurate, complete, or current. We may make changes to
            the materials contained on our website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            6. Links and External Sites
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Internet Support Solutions has not reviewed all of the sites linked to our website
            and is not responsible for the contents of any such linked site. The inclusion of any
            link does not imply endorsement by us of the site. Use of any such linked website is
            at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            7. Modifications of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Internet Support Solutions may revise these terms of service for its website at any
            time without notice. By using this website, you are agreeing to be bound by the then
            current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            8. Governing Law
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws
            of the United States, and you irrevocably submit to the exclusive jurisdiction of the
            courts located in this location.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            9. User Responsibilities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree to use our services responsibly and not:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Provide false or misleading information</li>
            <li>• Engage in fraudulent activities</li>
            <li>• Harass or threaten our staff</li>
            <li>• Attempt to gain unauthorized access</li>
            <li>• Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            10. Contact Information
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="text-muted-foreground">
            <p>Internet Support Solutions</p>
            <p>Email: support@internetsupport.com</p>
            <p>Phone: +1-800-000-0000</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  )
}
