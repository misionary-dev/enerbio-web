'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
  isActive: boolean
  className?: string
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  isActive,
  className,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isActive) return

    const match = value.match(/^([+>]?)(\d+)(.*)$/)
    let animationFrame = 0

    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animationFrame = window.requestAnimationFrame(() => setDisplayValue(value))
      return () => window.cancelAnimationFrame(animationFrame)
    }

    const prefix = match[1] || ''
    const targetNumber = Number.parseInt(match[2], 10)
    const suffix = match[3] || ''
    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentNumber = Math.floor(targetNumber * easedProgress)

      setDisplayValue(`${prefix}${currentNumber}${suffix}`)

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isActive, value, duration])

  return <span className={className}>{displayValue}</span>
}