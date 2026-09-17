import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ServiceDetailPage } from '@/components/servicios/ServiceDetailPage'
import { servicePages } from '@/lib/data/servicePages'

export default function Page() { return <><Header /><ServiceDetailPage service={servicePages[4]} /><Footer /></> }