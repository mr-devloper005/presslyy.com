'use client'

import type { ReactNode } from 'react'

export function PresslyyContactForm({ children }: { children: ReactNode }) {
  return (
    <form
      className="mt-8 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {children}
    </form>
  )
}
