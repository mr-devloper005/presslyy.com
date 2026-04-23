import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { PresslyyContactForm } from '@/components/presslyy/contact-form'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const deskEmail = `press@${SITE_CONFIG.domain}`

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f6f4f8] text-[#413f42]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#16003b]/8 bg-[#16003b] py-12 text-white lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Contact Presslyy</h1>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Distribution questions, billing, and editorial support—send a message and we will route it to the right desk.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16 lg:px-8">
          <div className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-[#16003b]">Send a message</h2>
            <p className="mt-2 text-sm text-[#7f8487]">
              Fields marked <span className="text-[#f73d93]">*</span> are required.
            </p>
            <PresslyyContactForm>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-name">
                  Full name <span className="text-[#f73d93]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 h-12 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-email">
                  Email <span className="text-[#f73d93]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 h-12 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-phone">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-org">
                  Organization type
                </label>
                <select
                  id="contact-org"
                  name="organization"
                  className="mt-2 h-12 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="company">Company</option>
                  <option value="agency">Agency</option>
                  <option value="nonprofit">Nonprofit</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-subject">
                  Topic <span className="text-[#f73d93]">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    How can we help?
                  </option>
                  <option value="distribution">Distribution &amp; plans</option>
                  <option value="billing">Billing</option>
                  <option value="technical">Technical support</option>
                  <option value="press">Media inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-[#413f42]" htmlFor="contact-message">
                  Message <span className="text-[#f73d93]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-[#16003b]/12 bg-[#f6f4f8] px-4 py-3 text-sm outline-none ring-[#f73d93]/30 focus:ring-2"
                  placeholder="Include timelines, links, and anything we should know."
                />
              </div>
              <p className="text-xs text-[#7f8487]">
                This form is a visual contact template. Wire it to your backend or helpdesk when ready—routing stays unchanged until you connect it.
              </p>
              <button
                type="submit"
                className="h-12 rounded-full bg-[#f73d93] text-sm font-semibold text-white shadow-[0_12px_32px_rgba(247,61,147,0.3)] transition hover:bg-[#e02d82]"
              >
                Submit now
              </button>
            </PresslyyContactForm>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-[#16003b]">Desk hours</h2>
              <div className="mt-4 flex gap-3 text-sm text-[#413f42]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#f73d93]" aria-hidden />
                <div>
                  <p className="font-medium text-[#16003b]">Monday – Friday</p>
                  <p className="text-[#7f8487]">9:00am – 6:00pm (local site time)</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#16003b]/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-[#16003b]">Direct lines</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#f73d93]" aria-hidden />
                  <div>
                    <p className="font-medium text-[#16003b]">Editorial &amp; distribution</p>
                    <a href={`mailto:${deskEmail}`} className="text-[#f73d93] hover:underline">
                      {deskEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#f73d93]" aria-hidden />
                  <div>
                    <p className="font-medium text-[#16003b]">Phone</p>
                    <p className="text-[#7f8487]">Available on enterprise plans</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f73d93]" aria-hidden />
                  <div>
                    <p className="font-medium text-[#16003b]">HQ</p>
                    <p className="text-[#7f8487]">Remote-first team · correspondence by email</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#16003b] p-6 text-white sm:p-8">
              <p className="text-sm leading-relaxed text-white/90">
                Looking for quick answers? Review common questions about plans, distribution scope, and timelines.
              </p>
              <Link
                href="/pricing#faq"
                className="mt-5 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/16"
              >
                View FAQs
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
