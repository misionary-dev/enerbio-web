'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

export function CountrySelector() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname.startsWith('/py')) return
    try {
      if (sessionStorage.getItem('country-chosen')) return
    } catch {}
    setVisible(true)
  }, [pathname])

  const choose = (country: 'ar' | 'py') => {
    try { sessionStorage.setItem('country-chosen', '1') } catch {}
    setVisible(false)
    if (country === 'py') router.push('/py')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <Image
          src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp"
          alt="EnerBio"
          width={140}
          height={40}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-7 text-2xl font-bold text-enerbio-verde-oscuro">¿Desde dónde nos visitás?</h2>
        <p className="mt-3 text-base text-enerbio-gris-texto">Seleccioná tu país para ver la información correspondiente a tu región.</p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => choose('ar')}
            className="flex flex-1 flex-col items-center gap-3 rounded-xl border-2 border-transparent bg-enerbio-gris-claro p-5 transition-all duration-200 hover:border-enerbio-verde-acento hover:bg-white hover:shadow-md"
          >
            <img src="https://flagcdn.com/w80/ar.png" alt="Argentina" width={80} height={53} className="rounded shadow-sm" />
            <span className="font-bold text-enerbio-verde-oscuro">Argentina</span>
          </button>
          <button
            onClick={() => choose('py')}
            className="flex flex-1 flex-col items-center gap-3 rounded-xl border-2 border-transparent bg-enerbio-gris-claro p-5 transition-all duration-200 hover:border-enerbio-verde-acento hover:bg-white hover:shadow-md"
          >
            <img src="https://flagcdn.com/w80/py.png" alt="Paraguay" width={80} height={53} className="rounded shadow-sm" />
            <span className="font-bold text-enerbio-verde-oscuro">Paraguay</span>
          </button>
        </div>
      </div>
    </div>
  )
}
