'use client'

import dynamic from 'next/dynamic'
import { LoadingSpinner } from '@/components/ui/Loading'

// Dynamic import of ValueAddedSection to avoid SSR issues
const ValueAddedSection = dynamic(() => import('./ValueAddedSection'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <LoadingSpinner size="lg" />
    </div>
  )
})

export default function ValueAddedSectionWrapper() {
  return <ValueAddedSection />
}