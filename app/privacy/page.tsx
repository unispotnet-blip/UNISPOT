import LegalPageLayout from '@/components/legal-page-layout'

export default function Privacy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="February 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            1. Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Internet Support Solutions ("we," "us," "our," or "Company") is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please read this Privacy Policy carefully. If you do not agree with our policies and
            practices, please do not use our services. Your continued use of our services indicates
            your acceptance of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Personal Information You Provide
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li>• Name and contact information (email, phone number, address)</li>
            <li>• Account credentials and authentication information</li>
            <li>• Information about your internet or cable service issues</li>
            <li>• Payment information when purchasing services</li>
            <li>• Communications with our support team</li>
            <li>• Feedback and survey responses</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Information Collected Automatically
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Browser and device information</li>
            <li>• IP address and location data</li>
            <li>• Usage data and analytics</li>
            <li>• Cookies and tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Provide, maintain, and improve our services</li>
            <li>• Process transactions and send related information</li>
            <li>• Send technical notices and support messages</li>
            <li>• Respond to your inquiries and comments</li>
            <li>• Monitor and analyze trends and usage</li>
            <li>• Detect and prevent fraudulent activities</li>
            <li>• Comply with legal obligations</li>
            <li>• Send promotional communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            4. Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We implement comprehensive security measures to protect your personal information,
            including:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li>• Enterprise-level encryption for data transmission</li>
            <li>• Secure password storage with hashing</li>
            <li>• Regular security audits and updates</li>
            <li>• Access controls and authentication</li>
            <li>• Compliance with industry standards</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            While we strive to protect your personal information, please understand that no
            method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            5. Data Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal information for as long as necessary to provide our services
            and fulfill the purposes outlined in this Privacy Policy. Personal information is
            typically retained for 90 days after service termination, unless legal obligations
            require longer retention.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            6. Your Privacy Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li>• Right to access your personal information</li>
            <li>• Right to correct inaccurate data</li>
            <li>• Right to delete your personal information</li>
            <li>• Right to opt-out of marketing communications</li>
            <li>• Right to data portability</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            To exercise these rights, please contact us at support@internetsupport.com.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            7. Cookies and Tracking
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies and similar tracking technologies to enhance your experience. You can
            control cookie preferences through your browser settings. Disabling cookies may
            affect the functionality of our website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            8. Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy or our privacy practices, please
            contact us at:
          </p>
          <div className="mt-4 text-muted-foreground">
            <p>Internet Support Solutions</p>
            <p>Email: support@internetsupport.com</p>
            <p>Phone: +1-800-000-0000</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  )
}
