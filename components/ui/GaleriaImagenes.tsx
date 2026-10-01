'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

interface GaleriaImagenesProps {
  imagenes: readonly string[]
  nombre: string
}

export function GaleriaImagenes({ imagenes, nombre }: GaleriaImagenesProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() =>
    setSelected(i => i === null ? null : (i - 1 + imagenes.length) % imagenes.length),
    [imagenes.length]
  )
  const next = useCallback(() =>
    setSelected(i => i === null ? null : (i + 1) % imagenes.length),
    [imagenes.length]
  )

  useEffect(() => {
    if (selected === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close, prev, next])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
        {imagenes.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-enerbio-verde-acento"
          >
            <Image
              src={src}
              alt={`${nombre} — imagen ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="rounded-full bg-white/0 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Ver imagen
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={close}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/25 md:left-6"
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[88vh] max-w-[88vw] items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={imagenes[selected]}
              alt={`${nombre} — imagen ${selected + 1}`}
              width={1400}
              height={1050}
              className="max-h-[88vh] max-w-[88vw] rounded-xl object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black/60 to-transparent py-3 text-center text-sm text-white/80">
              {selected + 1} / {imagenes.length}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/25 md:right-6"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={close}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-colors hover:bg-white/25 md:right-6 md:top-6"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
