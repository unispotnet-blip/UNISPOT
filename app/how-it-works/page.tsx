'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FloatingCallButton from '@/components/floating-call-button'
import StickyCallBar from '@/components/sticky-call-bar'
import CallModal from '@/components/call-modal'
import CTAAndFooter from '@/components/cta-and-footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  UserCircle2,
  Receipt,
  CreditCard,
  Repeat,
  AlertTriangle,
  KeyRound,
  History,
  LifeBuoy,
  Wallet,
  Phone,
} from 'lucide-react'

const quickLinks = [
  { icon: UserCircle2, title: 'Access Your Account', href: '#access-account' },
  { icon: Receipt, title: 'View Your Bill', href: '#view-bill' },
  { icon: CreditCard, title: 'Make a Payment', href: '#make-payment' },
  { icon: Repeat, title: 'AutoPay', href: '#autopay' },
  { icon: AlertTriangle, title: 'Payment Failed', href: '#payment-failed' },
  { icon: KeyRound, title: "Can't Log In", href: '#account-access-issues' },
  { icon: History, title: 'Billing History', href: '#billing-history' },
  { icon: LifeBuoy, title: 'Troubleshooting', href: '#troubleshooting' },
]

const paymentMethods = [
  {
    title: 'Online Account Portal',
    description:
      'Most internet providers let you pay directly through their website or online account dashboard using a saved or one-time payment method.',
  },
  {
    title: 'Provider Mobile App',
    description:
      'Many providers offer a mobile app where you can view your balance, see due dates, and submit a payment from your phone.',
  },
  {
    title: 'Automated Phone Payment',
    description:
      'Providers commonly offer an automated phone line where you can enter your account number and pay using a card or bank account.',
  },
  {
    title: 'Mailed Check or Money Order',
    description:
      'Some customers prefer to mail a payment. Your provider\'s statement usually includes a remittance address for this option.',
  },
]

const commonCharges = [
  {
    title: 'Base Service Charge',
    description:
      'The recurring monthly cost for your internet plan or bundle, usually billed a set number of days before or after your service date.',
  },
  {
    title: 'Equipment Fees',
    description:
      'A rental charge for a modem, router, or gateway device, if you are not using your own equipment.',
  },
  {
    title: 'Taxes & Regulatory Fees',
    description:
      'Government-mandated taxes and surcharges that vary by state, county, and city. These are set by your provider and local regulations, not by us.',
  },
  {
    title: 'One-Time or Prorated Charges',
    description:
      'Installation fees, service changes, or prorated amounts that can appear on your first bill after signing up or changing plans.',
  },
  {
    title: 'Late Fees',
    description:
      'A charge that may apply if a payment is not received by the due date shown on your statement.',
  },
]

const troubleshootingFaqs = [
  {
    question: 'Why does my bill amount look different than I expected?',
    answer:
      'Bill totals can shift from month to month due to prorated charges, promotional pricing that has expired, added equipment, or one-time fees. Review the itemized charges section of your statement, which most providers include, to see a full breakdown.',
  },
  {
    question: 'My payment shows as pending. Is that normal?',
    answer:
      'Yes. Many payment methods take a short time to process before they are marked as "posted" or "completed." If a pending payment does not clear within a few business days, check with your bank or the provider\'s support line.',
  },
  {
    question: 'Can I change my due date?',
    answer:
      'Some providers allow you to request a different billing date through your account settings or by contacting their billing department directly. Availability depends on your specific provider and plan.',
  },
  {
    question: 'I was charged after canceling my service. What should I do?',
    answer:
      'This can happen if a bill was already generated before the cancellation was processed, or if the cancellation date falls mid-cycle. Review your final statement for a prorated credit, and reach out to the provider\'s billing support if the charge looks incorrect.',
  },
  {
    question: 'Do you have access to my provider account or billing information?',
    answer:
      'No. We do not have access to your provider account, payment details, or billing history. This guide is general, educational information to help you understand common internet billing processes. For account-specific questions, always use your provider\'s official portal or support line.',
  },
]

export default function BillPayGuide() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="overflow-hidden pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <p className="text-accent text-xs font-semibold">GENERAL EDUCATIONAL GUIDE • NOT A SERVICE PROVIDER</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Internet &amp; Bill Pay Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Plain-language guidance on managing your internet account, understanding your bill, and paying it with confidence.
            </p>
            <div className="mt-8 p-6 rounded-lg bg-card border border-accent/30 text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">Please note:</span> This guide provides general, educational information about how internet billing typically works. We are an independent third-party service and do not have access to your provider account or payment details. Exact steps, fees, and policies vary by provider — always confirm specifics with your own provider's official account portal, app, or statement.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-semibold text-muted-foreground text-center mb-6 uppercase tracking-wide">
              Jump to a Topic
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
                  >
                    <Icon className="text-accent" size={24} />
                    <span className="text-sm font-medium text-foreground">{link.title}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Access Your Account */}
        <section id="access-account" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <UserCircle2 className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                How to Access &amp; Manage Your Internet Account
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most internet providers offer an online account portal or mobile app where you can manage your service. Here is the general process for getting set up:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: 'Locate your provider\'s account portal',
                  text: 'Check your welcome email, printed statement, or the provider\'s official website for a "Sign In" or "My Account" link.',
                },
                {
                  title: 'Create or verify your login',
                  text: 'You will typically need your account number, the service address, or the email/phone number used when you signed up.',
                },
                {
                  title: 'Set up two-factor verification if offered',
                  text: 'Many providers offer an extra verification step by text or email. Turning this on adds a layer of protection to your account.',
                },
                {
                  title: 'Review your account dashboard',
                  text: 'Once logged in, you can usually see your current plan, equipment, bill summary, and support options in one place.',
                },
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* View Your Bill */}
        <section id="view-bill" className="py-20 px-4 bg-card/50 scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Receipt className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                How to View Your Internet Bill
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Your bill is generally available in more than one place, so you can check it however is easiest for you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Online Account Dashboard',
                  text: 'Look for a "Billing" or "Statements" tab after logging in, where recent and past bills are usually stored.',
                },
                {
                  title: 'Email Statement',
                  text: 'If you have opted into paperless billing, you likely receive a monthly email notification when a new bill is ready.',
                },
                {
                  title: 'Mailed Paper Statement',
                  text: 'If paperless billing is not enabled, a printed statement is typically mailed to your service address each cycle.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Make a Payment */}
        <section id="make-payment" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                How to Make a Bill Payment
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A typical one-time payment follows a similar flow across most providers:
            </p>
            <ol className="space-y-4 mb-12">
              {[
                'Sign in to your account portal or open your provider\'s app.',
                'Go to the "Billing" or "Make a Payment" section.',
                'Confirm the amount due and the payment date.',
                'Choose a payment method and enter the details.',
                'Review and submit the payment, then save or screenshot the confirmation.',
              ].map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Wallet className="text-accent" size={22} />
              Common Payment Methods
            </h3>
            <p className="text-muted-foreground mb-6">
              Availability varies by provider, but these are payment methods commonly offered across the industry:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{method.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Charges */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Understanding Common Charges on Your Bill
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Internet bills can include several line items beyond your base plan price. Here are charges you may commonly see:
            </p>
            <div className="space-y-4">
              {commonCharges.map((charge, index) => (
                <div key={index} className="p-5 rounded-lg bg-card border border-border flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <h4 className="font-semibold text-foreground sm:w-56 flex-shrink-0">{charge.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{charge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AutoPay */}
        <section id="autopay" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Repeat className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                AutoPay &amp; Recurring Payments
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              AutoPay lets your bill be paid automatically each cycle using a saved payment method, so you do not have to submit a payment manually every month. It is typically enabled from the billing settings section of your account.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Before enrolling, it is worth checking a few things:
            </p>
            <ul className="space-y-3">
              {[
                'Which payment method is saved on file and whether it is up to date.',
                'What date each cycle the automatic payment will be withdrawn.',
                'Whether you will still receive a statement or notification before each charge.',
                'How to pause or cancel AutoPay if your payment method changes.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Payment Failed */}
        <section id="payment-failed" className="py-20 px-4 bg-card/50 scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                What to Do If a Payment Fails
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A payment can be declined or fail to process for several ordinary reasons. If that happens, these steps generally help:
            </p>
            <ol className="space-y-4">
              {[
                'Double-check the card number, expiration date, and billing zip code for typos.',
                'Confirm the payment method has sufficient funds or available credit.',
                'Check with your bank or card issuer, since some declines happen on their end for security reasons.',
                'Try an alternate payment method if the first one continues to fail.',
                'Contact your provider\'s billing support if the issue persists, so they can confirm your account status and avoid a service interruption.',
              ].map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Account Access Issues */}
        <section id="account-access-issues" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <KeyRound className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                What to Do If You Cannot Access Your Account
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Login issues happen to everyone. If you are locked out, try these general steps first:
            </p>
            <ol className="space-y-4">
              {[
                'Use the "Forgot Username" or "Forgot Password" link on the sign-in page.',
                'Check that you are entering the email, phone number, or account number your provider has on file.',
                'Look for a verification code sent by text or email, and check spam folders if it does not arrive quickly.',
                'Clear your browser cache or try a different browser/device if the page will not load correctly.',
                'If none of the above works, contact your provider\'s support line directly so they can verify your identity and restore access.',
              ].map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Billing History */}
        <section id="billing-history" className="py-20 px-4 bg-card/50 scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <History className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Payment Confirmation &amp; Billing History
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              After you submit a payment, most providers show an on-screen confirmation with a reference or confirmation number. It is a good habit to save or screenshot this in case you need to reference it later.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For a record of past charges and payments, look for a "Billing History," "Payment History," or "Statements" section in your account. This usually lists past due dates, amounts paid, and the payment method used for each cycle.
            </p>
          </div>
        </section>

        {/* Troubleshooting Accordion */}
        <section id="troubleshooting" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <LifeBuoy className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Basic Troubleshooting &amp; Help
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Answers to a few common billing questions customers run into:
            </p>
            <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-6">
              {troubleshootingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-foreground text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <Phone className="text-accent mx-auto mb-4" size={32} />
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you have questions about your internet account or bill that this guide did not answer, our team can walk you through it.
            </p>
            <a
              href="tel:+18886085436"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity inline-block"
            >
              Call Now: (888) 608-5436
            </a>
          </div>
        </section>

        <CTAAndFooter />
      </main>

      <FloatingCallButton onOpen={() => setModalOpen(true)} />
      <StickyCallBar onOpenModal={() => setModalOpen(true)} />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
