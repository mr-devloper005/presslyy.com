import Link from 'next/link'
import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press',
    title: `Press kit | ${SITE_CONFIG.name}`,
    description: 'Brand guidelines and media contact information for Presslyy.',
    openGraphTitle: `Press kit | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Resources for journalists and partners covering Presslyy.',
  })
}

const deskEmail = `press@${SITE_CONFIG.domain}`

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#f6f4f8] text-[#413f42]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#16003b]/8 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:py-16 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f73d93]">For journalists</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#16003b] sm:text-4xl">Press resources</h1>
            <p className="mt-4 text-sm leading-relaxed text-[#7f8487]">
              Use this page for factual company context, brand notes, and the fastest path to a spokesperson.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16 lg:px-8">
          <section className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-[#16003b]">Company snapshot</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-[#16003b]">Legal name</dt>
                <dd className="mt-1 text-[#7f8487]">{SITE_CONFIG.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-[#16003b]">What we do</dt>
                <dd className="mt-1 text-[#7f8487]">{SITE_CONFIG.description}</dd>
              </div>
              <div>
                <dt className="font-medium text-[#16003b]">Primary site</dt>
                <dd className="mt-1">
                  <a href={SITE_CONFIG.baseUrl} className="font-medium text-[#f73d93] hover:underline">
                    {SITE_CONFIG.domain}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 rounded-xl bg-[#f6f4f8] p-5">
              <p className="text-sm font-medium text-[#16003b]">Media contact</p>
              <a href={`mailto:${deskEmail}`} className="mt-2 inline-block text-sm font-semibold text-[#f73d93] hover:underline">
                {deskEmail}
              </a>
              <p className="mt-3 text-xs text-[#7f8487]">Please include deadline, outlet, and whether commentary is on or off the record.</p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-[#16003b]">Brand usage</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#7f8487]">
                Reference the wordmark as <span className="font-semibold text-[#16003b]">{SITE_CONFIG.name}</span>. Avoid altering
                spacing, casing, or color for legibility—use dark plum (#16003b) on light backgrounds and white on dark surfaces.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#7f8487]">
                Need logo files? Request the brand pack by email—we will send SVG and PNG exports sized for web and print.
              </p>
            </div>
            <div className="rounded-2xl bg-[#16003b] p-6 text-white sm:p-8">
              <h2 className="text-lg font-semibold">Recent coverage starts in the newsroom</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Official announcements publish to the public archive first. Cite the newsroom URL when linking readers to primary
                source material.
              </p>
              <Link
                href="/updates"
                className="mt-6 inline-flex rounded-full bg-[#f73d93] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e02d82]"
              >
                Open newsroom
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
