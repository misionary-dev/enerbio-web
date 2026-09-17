'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/lib/hooks/useInView'

export function Reveal({ children, className = '', delay = 0, direction = 'up' }: { children: ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right' }) {
  const { ref, isInView } = useInView(0.15, true)
  const offset = direction === 'left' ? '-translate-x-8' : direction === 'right' ? 'translate-x-8' : 'translate-y-8'

  return <div ref={ref} className={`${className} transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isInView ? 'translate-x-0 translate-y-0 opacity-100' : `${offset} opacity-0`}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}