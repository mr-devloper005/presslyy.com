import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8f0f7] text-[#5B2B3B]',
      panel: 'border border-[#e6d4e0] bg-white shadow-[0_24px_64px_rgba(91,43,59,0.08)]',
      side: 'border border-[#e6d4e0] bg-[#f5eef2]',
      muted: 'text-[#7a5d6b]',
      action: 'bg-[#f73d93] text-white hover:bg-[#e639b8]',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#f8f0f7] text-[#5B2B3B]',
      panel: 'border border-[#e6d4e0] bg-[#fdf5fb] shadow-[0_24px_60px_rgba(91,43,59,0.08)]',
      side: 'border border-[#e6d4e0] bg-[#f5eef2]',
      muted: 'text-[#7a5d6b]',
      action: 'bg-[#f73d93] text-white hover:bg-[#e639b8]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#5B2B3B] text-white',
      panel: 'border border-white/10 bg-[rgba(91,43,59,0.78)] shadow-[0_28px_80px_rgba(0,0,0,0.35)]',
      side: 'border border-white/10 bg-white/6',
      muted: 'text-[#f5eef2]',
      action: 'bg-[#f73d93] text-white hover:bg-[#e639b8]',
      icon: ImageIcon,
      title: 'Set up your creator profile',
      body: 'Launch a visual-first account with gallery publishing, identity surfaces, and profile-led discovery.',
    }
  }
  return {
    shell: 'bg-[#f8f0f7] text-[#5B2B3B]',
    panel: 'border border-[#e6d4e0] bg-[#fdf5fb] shadow-[0_24px_60px_rgba(91,43,59,0.08)]',
    side: 'border border-[#e6d4e0] bg-[#f5eef2]',
    muted: 'text-[#7a5d6b]',
    action: 'bg-[#5B2B3B] text-[#fdf5fb] hover:bg-[#4a2238]',
    icon: Bookmark,
    title: 'Create a curator account',
    body: 'Build shelves, save references, and connect collections to your profile without a generic feed setup.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
