'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  delayBetweenWords?: number
  className?: string
}

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting'

export default function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2500,
  delayBetweenWords = 300,
  className = '',
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[currentWordIndex]
    let delay = typingSpeed

    if (phase === 'pausing') delay = pauseTime
    if (phase === 'deleting') delay = deletingSpeed
    if (phase === 'waiting') delay = delayBetweenWords

    const timeout = window.setTimeout(() => {
      if (phase === 'typing') {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        } else {
          setPhase('pausing')
        }
        return
      }

      if (phase === 'pausing') {
        setPhase('deleting')
        return
      }

      if (phase === 'deleting') {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setPhase('waiting')
        }
        return
      }

      setCurrentWordIndex((previous) => (previous + 1) % words.length)
      setPhase('typing')
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [currentText, currentWordIndex, delayBetweenWords, deletingSpeed, pauseTime, phase, typingSpeed, words])

  return (
    <span className={className}>
      {currentText}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-blink bg-current align-middle" aria-hidden="true" />
    </span>
  )
}