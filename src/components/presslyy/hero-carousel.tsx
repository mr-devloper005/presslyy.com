'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'

export type HeroSlide = {
  id: string
  title: string
  href: string
  image: string
}

type Props = {
  slides: HeroSlide[]
}

export function PresslyyHeroCarousel({ slides }: Props) {
  const [i, setI] = useState(0)
  if (!slides.length) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#16003b]/10 bg-[#16003b] shadow-[0_24px_64px_rgba(22,0,59,0.25)] md:aspect-[16/10]">
        <ContentImage
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80"
          alt="Newsroom"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16003b]/90 via-[#16003b]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Presslyy newsroom</p>
          <p className="mt-2 text-lg font-semibold leading-snug">Your releases will appear here when published.</p>
          <Link
            href="/updates"
            className="mt-4 inline-flex rounded-full bg-[#f73d93] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e02d82]"
          >
            Open newsroom
          </Link>
        </div>
      </div>
    )
  }

  const active = slides[i]!
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#16003b]/10 shadow-[0_28px_72px_rgba(22,0,59,0.18)] md:aspect-[16/10]">
        <ContentImage src={active.image} alt={active.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16003b]/92 via-[#16003b]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f73d93]">Featured release</p>
          <p className="mt-2 line-clamp-2 text-xl font-semibold leading-snug text-white sm:text-2xl">{active.title}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={active.href}
              className="inline-flex rounded-full bg-[#f73d93] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(247,61,147,0.45)] transition hover:bg-[#e02d82]"
            >
              Read release
            </Link>
            <Link href="/updates" className="text-sm font-semibold text-white/90 underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
        </div>
      </div>
      {slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
            onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
            onClick={() => setI((v) => (v + 1) % slides.length)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="mt-4 flex justify-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-[#f73d93]' : 'w-2 bg-[#16003b]/25'}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
