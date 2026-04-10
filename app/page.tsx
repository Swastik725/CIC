import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'

export const metadata: Metadata = {
  title: 'EchoVault - Fan Relationship Management',
  description: 'Your fans are remembered. Your rewards evolve.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  )
}