import { Portfolio } from '@/components/portfolio'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Swift Digital Services',
  description: 'Web design and development for Nigerian businesses, with WhatsApp booking and ordering.',
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  address: { '@type': 'PostalAddress', addressLocality: 'Kaduna', addressCountry: 'NG' },
  telephone: '+2348165212254',
  email: 'swiftdigitalservices00@gmail.com',
  url: 'https://swiftdigital.vercel.app',
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Portfolio />
  </>
}
