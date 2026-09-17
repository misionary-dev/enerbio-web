import type { SVGProps } from 'react'

export type ServiceIconName =
  | 'energy' | 'analysis' | 'finance' | 'legal' | 'engineering' | 'optimization'
  | 'assembly' | 'construction' | 'operation' | 'maintenance' | 'training'
  | 'environment' | 'carbon' | 'certificate' | 'sustainability'
  | 'design' | 'contract' | 'savings' | 'predictability' | 'focus'
  | 'agriculture' | 'cold' | 'dairy' | 'ethanol' | 'forestry' | 'industry'
  | 'email' | 'phone' | 'location'

const paths: Record<ServiceIconName, React.ReactNode> = {
  energy: <path d="M13.2 2 5.5 13.1h5.2L9.8 22l8.7-12.3h-5.4L13.2 2Z" fill="currentColor" stroke="none" />,
  analysis: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5M7 10h6M10 7v6"/></>,
  finance: <><path d="M12 2v20M17 6.5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  legal: <><path d="M12 3v18M5 7h14M5 7l-3 6h6L5 7Zm14 0-3 6h6l-3-6ZM8 21h8"/></>,
  engineering: <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z"/>,
  optimization: <><path d="M4 19V9M10 19V5M16 19v-7M22 19V2"/><path d="m3 6 5-3 5 4 8-5"/></>,
  assembly: <><path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-5h6v5"/><path d="M9 10h.01M15 10h.01"/></>,
  construction: <><path d="m14 7 3-3 3 3-3 3M17 4v16M4 20h16M6 20v-7h8v7"/></>,
  operation: <><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7v5l3 2M17 3h4v4"/></>,
  maintenance: <><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7"/><circle cx="17" cy="17" r="4"/></>,
  training: <><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c3 3 9 3 12 0v-4.5M22 9v6"/></>,
  environment: <><path d="M20 4C12 4 5 8 5 14c0 3 2 5 5 5 6 0 10-7 10-15Z"/><path d="M4 20c3-5 7-8 12-11"/></>,
  carbon: <><circle cx="12" cy="12" r="8"/><path d="M15 9a4 4 0 1 0 0 6"/></>,
  certificate: <><path d="M6 3h12v13H6zM9 7h6M9 11h4"/><path d="m9 16-1 5 4-2 4 2-1-5"/></>,
  sustainability: <><path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5"/><path d="M18 3v4h-4M6 21v-4h4"/></>,
  design: <><path d="M4 19 15 8l3 3L7 22H4v-3ZM14 5l2-2 5 5-2 2"/><path d="M4 14H2V2h12v2"/></>,
  contract: <><path d="M6 2h9l3 3v17H6zM14 2v5h5M9 12h6M9 16h6"/></>,
  savings: <><path d="M5 10c0-4 3-7 7-7s7 3 7 7c0 3-2 5-4 6v3H9v-3c-2-1-4-3-4-6Z"/><path d="M9 22h6M12 7v6M9 10h6"/></>,
  predictability: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></>,
  focus: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/></>,
  agriculture: <><path d="M4 21V9M4 14c5 0 8-3 8-8-5 0-8 3-8 8ZM4 18c4 0 7-2 7-6M15 21V8M15 12c4 0 6-2 6-6-4 0-6 2-6 6Z"/></>,
  cold: <><path d="M12 2v20M4 7l16 10M20 7 4 17M8 4l4 3 4-3M8 20l4-3 4 3"/></>,
  dairy: <><path d="M8 3h8l-1 4 3 4v10H6V11l3-4-1-4ZM9 7h6"/></>,
  ethanol: <><path d="M12 2v6M8 5h8M7 8h10l2 13H5L7 8Z"/><path d="M8 16h8"/></>,
  forestry: <><path d="m12 2-5 7h3l-5 7h5v6h4v-6h5l-5-7h3l-5-7Z"/></>,
  industry: <><path d="M3 21V10l6 3V8l6 4V5h6v16H3Z"/><path d="M7 17h2M13 17h2M18 9h1"/></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  phone: <path d="M6.6 3.5 9 3l2 5-2.2 1.8a14 14 0 0 0 5.4 5.4L16 13l5 2-.5 2.4A3 3 0 0 1 17.6 20C10.1 19.5 4.5 13.9 4 6.4A3 3 0 0 1 6.6 3.5Z"/>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
}

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}