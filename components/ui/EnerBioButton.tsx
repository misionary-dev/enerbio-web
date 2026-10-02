'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'accent'
type Size = 'sm' | 'md' | 'lg'

interface EnerBioButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  size?: Size
  type?: 'button' | 'submit'
  variant?: Variant
  className?: string
  disabled?: boolean
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
}

const variantStyles: Record<Variant, string> = {
  primary: 
    'bg-[#2D5016] text-white ' +
    'hover:bg-[#3A6B1E] ' +
    'shadow-lg shadow-[#2D5016]/20',
  secondary: 
    'bg-white text-[#2D5016] ' +
    'hover:bg-gray-50 ' +
    'shadow-lg shadow-black/10',
  accent: 
    'bg-[#7CB342] text-[#2D5016] ' +
    'hover:bg-[#8BC34A] ' +
    'shadow-lg shadow-[#7CB342]/30',
}

function BaseButton({
  children,
  onClick,
  size = 'lg',
  type = 'button',
  variant = 'primary',
  className,
  disabled,
}: Omit<EnerBioButtonProps, 'href'>) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        // Base
        'relative inline-flex items-center justify-center',
        'font-semibold rounded-full',
        'transition-all duration-300 ease-out',
        'overflow-hidden isolate',
        'hover:scale-[1.02] active:scale-[0.98]',
        // Size
        sizeStyles[size],
        // Variant
        variantStyles[variant],
        // Shine effect en hover (barrido de luz)
        'before:absolute before:inset-0',
        'before:rounded-full',
        'before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent',
        'before:-translate-x-full',
        'hover:before:translate-x-full',
        'before:transition-transform before:duration-1000 before:ease-in-out',
        'before:z-[1]',
        // Contenido por encima del shine
        '[&>span]:relative [&>span]:z-[2]',
        disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      <span>{children}</span>
    </button>
  )
}

// ═══════════════════════════════════════════════════════
// COMPONENTES EXPORTADOS
// ═══════════════════════════════════════════════════════

export function EnerBioButtonPrimary({
  children, onClick, href, size = 'lg', type = 'button', className, disabled
}: EnerBioButtonProps) {
  const button = (
    <BaseButton
      onClick={onClick}
      size={size}
      type={type}
      variant="primary"
      className={className}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  )
  return href ? <Link href={href}>{button}</Link> : button
}

export function EnerBioButtonSecondary({ 
  children, onClick, href, size = 'lg', type = 'button', className 
}: EnerBioButtonProps) {
  const button = (
    <BaseButton 
      onClick={onClick} 
      size={size} 
      type={type} 
      variant="secondary"
      className={className}
    >
      {children}
    </BaseButton>
  )
  return href ? <Link href={href}>{button}</Link> : button
}

export function EnerBioButtonAccent({ 
  children, onClick, href, size = 'lg', type = 'button', className 
}: EnerBioButtonProps) {
  const button = (
    <BaseButton 
      onClick={onClick} 
      size={size} 
      type={type} 
      variant="accent"
      className={className}
    >
      {children}
    </BaseButton>
  )
  return href ? <Link href={href}>{button}</Link> : button
}