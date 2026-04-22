import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: `Pricing | ${SITE_CONFIG.name}`,
    description: 'Compare Basic, Pro, and Premium press distribution on Presslyy. Add-ons, analytics tiers, and FAQs.',
    openGraphTitle: `Pricing | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Transparent tiers for press distribution, analytics, and media reach.',
    keywords: ['press release pricing', 'media distribution', 'PR plans', 'Presslyy'],
  })
}

const plans = [
  {
    name: 'Basic',
    price: '$149',
    cadence: '/ month',
    description: 'Essential distribution for lean teams publishing a steady cadence of updates.',
    cta: 'Start Basic',
    href: '/register',
    features: ['Standard syndication lane', 'Newsroom archive', 'Email support (48h)', 'Core analytics snapshot'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$349',
    cadence: '/ month',
    description: 'Balanced reach and measurement for teams running frequent launches and campaigns.',
    cta: 'Choose Pro',
    href: '/register',
    features: [
      'Expanded distribution lane',
      'Priority review window',
      'Engagement & referral analytics',
      'Dedicated success channel',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'Custom',
    cadence: '',
    description: 'High-volume programs that need bespoke routing, SLAs, and partner coordination.',
    cta: 'Talk to sales',
    href: '/contact',
    features: ['Custom distribution map', 'Named account lead', 'Volume-based packaging', 'Optional API handoffs'],
    highlight: false,
  },
]

const comparison = [
  { label: 'Distribution depth', basic: 'Standard', pro: 'Expanded', premium: 'Custom routing' },
  { label: 'Analytics', basic: 'Snapshot', pro: 'Full funnel', premium: 'Custom dashboards' },
  { label: 'Media reach', basic: 'Core network', pro: 'Priority surfaces', premium: 'Programmatic + partner' },
]

const addOns = [
  {
    title: 'Embargo scheduling',
    body: 'Coordinate timed releases across regions without manual last-minute edits.',
  },
  {
    title: 'Multimedia packaging',
    body: 'Hero imagery, inline galleries, and structured captions for premium presentation.',
  },
  {
    title: 'Executive briefing',
    body: 'One-page stakeholder summaries generated from approved release copy.',
  },
]

const faq = [
  {
    q: 'Can we switch tiers mid-cycle?',
    a: 'Yes—upgrades apply on your next invoice. Downgrades take effect at renewal to avoid disrupting active programs.',
  },
  {
    q: 'What does “distribution depth” include?',
    a: 'It describes how many syndication lanes and partner surfaces are eligible for each plan. Premium maps are tailored to your category and geography.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Annual agreements are available on Pro and Premium. Talk to sales for net terms.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f6f4f8] text-[#413f42]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#16003b]/8 bg-[#16003b] py-14 text-white lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f73d93]">Presslyy pricing</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]">
              Plans built for distribution—not surprise fees
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-white/85">
              Pick the lane that matches your cadence. Every tier includes readable newsroom pages and structured article layouts.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                  plan.highlight
                    ? 'border-[#f73d93] shadow-[0_24px_60px_rgba(247,61,147,0.18)] lg:scale-[1.03]'
                    : 'border-[#16003b]/10'
                }`}
              >
                {plan.highlight ? (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#f73d93] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-lg font-semibold text-[#16003b]">{plan.name}</h2>
                <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-[#7f8487]">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-[#16003b]">{plan.price}</span>
                  <span className="text-sm text-[#7f8487]">{plan.cadence}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-[#413f42]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f73d93]" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${
                    plan.highlight
                      ? 'bg-[#f73d93] text-white shadow-[0_12px_32px_rgba(247,61,147,0.35)] hover:bg-[#e02d82]'
                      : 'border border-[#16003b]/15 bg-white text-[#16003b] hover:bg-[#16003b]/6'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16003b]/8 bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#16003b] sm:text-3xl">Feature comparison</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#7f8487]">
              Same clean article experience everywhere—tiers differ by how far we amplify each release.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-[#16003b]/10">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="bg-[#16003b] text-white">
                    <th className="px-4 py-4 font-semibold">Capability</th>
                    <th className="px-4 py-4 font-semibold">Basic</th>
                    <th className="px-4 py-4 font-semibold">Pro</th>
                    <th className="px-4 py-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={row.label} className={idx % 2 === 0 ? 'bg-[#f6f4f8]/80' : 'bg-white'}>
                      <td className="px-4 py-4 font-medium text-[#16003b]">{row.label}</td>
                      <td className="px-4 py-4 text-[#413f42]">{row.basic}</td>
                      <td className="px-4 py-4 text-[#413f42]">{row.pro}</td>
                      <td className="px-4 py-4 text-[#413f42]">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-[#16003b] sm:text-3xl">Amplify with add-ons</h2>
              <p className="mt-2 max-w-xl text-sm text-[#7f8487]">Bolt-on services for launches that need extra coordination—not a different product.</p>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-[#f73d93] hover:underline">
              Ask about bundles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {addOns.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#16003b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7f8487]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-[#16003b]/8 bg-[#ede9f2]/80 py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#16003b] sm:text-3xl">Pricing FAQ</h2>
            <div className="mt-10 space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-[#16003b]/10 bg-white px-5 py-4 transition open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-left text-sm font-semibold text-[#16003b] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-[#f73d93] transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#7f8487]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#16003b] sm:text-3xl">Ready to publish your next release?</h2>
          <p className="mt-4 text-sm text-[#7f8487]">Open the newsroom to see live formatting, or talk to us about Premium routing.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/updates"
              className="inline-flex rounded-full bg-[#16003b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a0a5c]"
            >
              Visit newsroom
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#16003b]/15 px-6 py-3 text-sm font-semibold text-[#16003b] hover:bg-white"
            >
              Contact sales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
