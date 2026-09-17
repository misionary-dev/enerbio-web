const whatsappNumber = ''

const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : undefined

export function WhatsAppButton() {
  const content = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4Zm-8.4 18.2h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.8 9.8 0 1 1 8.2 4.5Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.3Z" /></svg>

  return whatsappHref ? <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" title="Contactar por WhatsApp" className="whatsapp-float flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline-white">{content}</a> : <button type="button" aria-label="WhatsApp próximamente disponible" title="WhatsApp próximamente disponible" disabled className="whatsapp-float flex h-14 w-14 cursor-not-allowed items-center justify-center rounded-full bg-[#25D366] text-white opacity-90 shadow-xl">{content}</button>
}