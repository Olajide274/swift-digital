'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const whatsapp = 'https://wa.me/2348165212254?text=Hello%20Swift%20Digital%20Services%2C%20I%27d%20like%20to%20discuss%20a%20website'
const projects = [
  { n: '01', industry: 'HOTEL · KADUNA', name: 'Villa Engracia Suites', problem: 'A boutique stay that needed room enquiries to go straight to WhatsApp.', built: 'Three room types with nightly rates and pre-filled reservation links. A considered guide to the gallery, rooftop bar, dining, security and directions.', tags: ['Client project'], url: 'https://engracia-black.vercel.app', image: 'case-villa-engracia.jpg', kind: 'hotel' },
  { n: '02', industry: 'FASHION & TAILORING · KADUNA', name: 'Kacé', problem: 'A tailoring label needed a better way to turn inspiration into a fitting.', built: 'A collection-led brand site with a save-your-picks shortlist and a request-a-design flow that leads to a fitting.', tags: ['Demo build'], url: 'https://kace-demo.vercel.app', image: 'case-kace.jpg', kind: 'fashion' },
  { n: '03', industry: 'PROPERTY', name: 'Kaduna Homes', problem: 'A marketplace concept for people finding a place and the people who care for it.', built: 'A rental experience for browsing, booking and managing properties, connecting owners with verified contractors.', tags: ['Demo build'], url: 'https://kadunahomes.vercel.app', image: 'case-kaduna-homes.jpg', kind: 'property' },
  { n: '04', industry: 'RETAIL', name: 'BTC Essential', problem: 'A simple path from browsing clothes, bags and shoes to placing an order.', built: 'An online store with category filters, quick view, a cart and pay-on-delivery checkout.', tags: ['Demo build'], url: 'https://btc-essential.vercel.app', image: 'case-btc-essential.jpg', kind: 'retail' },
  { n: '05', industry: 'OWN PRODUCT', name: 'Swift Digital Quote Tool', problem: 'Help business owners understand what to build before they pay.', built: 'An interactive questionnaire with a live website preview and a price range tailored to the answers.', tags: ['Own product'], url: 'https://swiftdigital.vercel.app', image: 'case-quote-tool.jpg', kind: 'tool' },
]
const services = [
  ['Business websites', 'Give customers a clear place to understand your business and take the next step.'],
  ['WhatsApp booking & ordering', 'Make it easy to ask, book or order from the page they are already viewing.'],
  ['Google Business Profile & local search setup', 'Help nearby customers find accurate business details when they search.'],
  ['Web apps & internal tools', 'Bring stock, bookings and day-to-day dashboards into one useful tool.'],
  ['Care plans', 'Keep your website hosted, updated and working after launch.'],
]
const faqs = [
  ['How long does a website take?', 'A focused business website can take a few weeks. The timing depends on the pages, content and how quickly we can review each preview.'],
  ['What do you need from me?', 'A short business brief, your services and prices, any photos or brand assets you have, and one person to review the work.'],
  ['Do I need a domain or hosting?', 'No. I can guide you through choosing a domain and hosting, and explain the options before anything is purchased.'],
  ['Can I update it myself?', 'Yes. We can agree which content you want to manage and I will show you how to make those updates.'],
  ['How do payments work?', 'We agree the scope and payment stages before work starts. You will see the plan and price in writing first.'],
]

function Mark({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span> }

function ProjectPreview({ project, featured = false }: { project: typeof projects[number]; featured?: boolean }) {
  return <a className={`device-link ${featured ? 'device-link-featured' : ''}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live site`}>
    <div className={`device-screen screen-${project.kind}`}>
      <div className="screen-bar"><span>SWIFT / {project.n}</span><span>↗</span></div>
      <div className="screen-content">
        <span className="screen-kicker">{project.industry}</span>
        <span className="screen-title">{project.name}</span>
        <span className="screen-rule" />
        <span className="screen-copy">{project.problem}</span>
        <span className="screen-cta">Explore the site <span>↗</span></span>
      </div>
    </div>
    <span className="device-caption">{project.image} <span>16:10 SCREEN PREVIEW</span></span>
  </a>
}

function ContactForm() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = `Hello Swift Digital Services, I’m ${name}. My business is ${type}. ${message}`
    window.open(`https://wa.me/2348165212254?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Name" /></label>
    <label>Business type<input required value={type} onChange={e => setType(e.target.value)} placeholder="Hotel, fashion, restaurant…" /></label>
    <label>What would you like to build?<textarea required rows={3} value={message} onChange={e => setMessage(e.target.value)} placeholder="A few details about your business" /></label>
    <button className="button button-dark" type="submit">Continue on WhatsApp <span>↗</span></button>
  </form>
}

export function Portfolio() {
  const [showFloat, setShowFloat] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.8)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <>
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Swift Digital Services home">SWIFT<span> / </span>DIGITAL</a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></header>
    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><Mark>Web design &amp; development · Kaduna, Nigeria</Mark><h1>Websites that fill your <em>inbox</em> with customers.</h1><p className="hero-sub">I design and build fast websites for Nigerian businesses, with WhatsApp booking and ordering built in, so enquiries land on your phone.</p><div className="hero-actions"><a className="button button-red" href={whatsapp} target="_blank" rel="noreferrer">Start a WhatsApp chat <span>↗</span></a><a className="text-link" href="#work">See the work <span>↓</span></a></div><div className="hero-foot"><span>INDEPENDENT STUDIO</span><span>KADUNA · NIGERIA</span></div></div><div className="hero-visual"><ProjectPreview project={projects[0]} featured /><p className="visual-note"><span>01 / 05</span> A stay, one easy reservation away.</p></div></section>
      <section id="work" className="work-section section-wrap"><div className="section-heading"><div><Mark>01 / Selected work</Mark><h2>Built for the <em>next step.</em></h2></div><p>Real routes from a first look to a booking, order or useful conversation.</p></div>{projects.map((p, i) => <article className={`project-row ${i % 2 ? 'project-reverse' : ''}`} key={p.n}><div className="project-info"><div className="project-meta"><span className="project-number">{p.n}</span><Mark>{p.industry}</Mark></div><h3>{p.name}</h3><p className="project-problem">{p.problem}</p><div className="built"><span className="built-label">WHAT I BUILT</span><p>{p.built}</p></div><div className="project-bottom"><span className="tag">{p.tags[0]}</span><a className="text-link" href={p.url} target="_blank" rel="noreferrer">View live site <span>↗</span></a></div></div><ProjectPreview project={p} /></article>)}</section>
      <section className="engineering"><div className="engineering-inner section-wrap"><div className="engineering-title"><Mark>02 / Under the hood</Mark><h2>I also build<br />backend <em>systems.</em></h2><p>For engineering teams and problems that need more than a website.</p><a className="light-link" href="https://michael-olajide-portfolio.vercel.app" target="_blank" rel="noreferrer">Engineering portfolio <span>↗</span></a><a className="light-link" href="https://github.com/Olajide274" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div><div className="engineering-list"><div className="terminal-line">$ ls ~/selected-systems</div><div className="system-row"><span>01</span><div><strong>Trade Escrow Protocol</strong><p>Go · gRPC · PostgreSQL · Redis<br />Paystack webhooks, tamper-evident audit log</p></div><a href="https://github.com/Olajide274/trade-escrow-protocol" target="_blank" rel="noreferrer" aria-label="Trade Escrow Protocol on GitHub">↗</a></div><div className="system-row"><span>02</span><div><strong>WayTrust</strong><p>Waybill escrow for motor-park clerks<br />Go · Next.js</p></div><span className="system-dash">—</span></div><div className="system-row"><span>03</span><div><strong>CheckAm</strong><p>Lost/stolen phone checker<br />Next.js · PostgreSQL</p></div><a href="https://check-am-kappa.vercel.app" target="_blank" rel="noreferrer" aria-label="CheckAm live site">↗</a></div><div className="system-row"><span>04</span><div><strong>1860 Travels ERP</strong><p>Case study</p></div><a href="https://github.com/Olajide274/1860-travels-erp-case-study" target="_blank" rel="noreferrer" aria-label="1860 Travels ERP case study">↗</a></div></div></div></section>
      <section id="services" className="services-section section-wrap"><div className="section-heading"><div><Mark>03 / Services</Mark><h2>Good work, <em>useful results.</em></h2></div><p>One clear job for every part of your website.</p></div><div className="service-list">{services.map(([title, outcome], i) => <a href="#contact" className="service-row" key={title}><span className="service-num">0{i + 1}</span><h3>{title}</h3><p>{outcome}</p><span className="service-arrow">↗</span></a>)}</div></section>
      <section id="process" className="process-section"><div className="section-wrap"><div className="section-heading"><div><Mark>04 / Process</Mark><h2>Clear steps. <em>No surprises.</em></h2></div></div><div className="timeline">{[['01', 'Talk on WhatsApp', 'Tell me what your business needs.'], ['02', 'See a preview', 'Review the direction before the full build.'], ['03', 'Build & review', 'We shape the details together.'], ['04', 'Launch & support', 'Go live, with help when you need it.']].map(([n, title, body]) => <div className="timeline-step" key={n}><span>{n}</span><i /><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
      <section id="pricing" className="pricing-section section-wrap"><div className="section-heading"><div><Mark>05 / Pricing</Mark><h2>Start with the <em>right scope.</em></h2></div><p>Final pricing depends on the pages and features your business needs.</p></div><div className="pricing-grid">{[['01', 'Landing Page', ['One focused page', 'WhatsApp enquiry link', 'Mobile-friendly design']], ['02', 'Business Website', ['A set of business pages', 'WhatsApp booking or ordering', 'Contact and location details']], ['03', 'Custom System', ['A tailored web app', 'Workflow agreed together', 'Build and review support']]].map(([n, name, items]) => <article className="price-item" key={name as string}><Mark>{n} / PACKAGE</Mark><h3>{name}</h3><p className="price-amount">From <span>₦[amount]</span></p><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul><a href="#contact" className="text-link">Discuss this package <span>↗</span></a></article>)}</div><p className="pricing-note">Domain and hosting guidance included.</p></section>
      <section id="about" className="about-section"><div className="about-inner section-wrap"><div className="portrait"><div className="portrait-placeholder"><Image src="/images/olajide.jpg" alt="Portrait placeholder for Michael Olajide David" fill sizes="(max-width: 640px) 260px, 365px" /><span>PORTRAIT PLACEHOLDER</span><span>/images/olajide.jpg</span></div><span className="portrait-caption">MICHAEL OLAJIDE DAVID · KADUNA</span></div><div className="about-copy"><Mark>06 / About</Mark><h2>Independent by choice.<br /><em>Useful by design.</em></h2><p>I&apos;m Michael Olajide David, founder of Swift Digital Services, a full-stack developer in Kaduna.</p><p>I build client sites and my own software products.</p><p>BSc Physics with Electronics, AFIT. Every site I ship carries a small “Website by Swift Digital Services” credit.</p><a className="text-link" href="#contact">A little about your project <span>↗</span></a></div></div></section>
      <section className="faq-section section-wrap"><div className="faq-heading"><Mark>07 / FAQ</Mark><h2>A few <em>good questions.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="contact-section"><div className="contact-inner section-wrap"><div className="contact-copy"><Mark>08 / Contact</Mark><h2>Tell me about<br />your <em>business.</em></h2><a className="button button-red" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><div className="contact-details"><a href="tel:+2348165212254">0816 521 2254</a><a href="mailto:swiftdigitalservices00@gmail.com">swiftdigitalservices00@gmail.com</a><p>Kaduna, Nigeria. Working with clients across Nigeria.</p></div></div><div className="form-wrap"><Mark>OR SEND A QUICK BRIEF</Mark><ContactForm /></div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#top">SWIFT<span> / </span>DIGITAL</a><span>© 2026 Swift Digital Services</span><div><a href="https://github.com/Olajide274" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/michael-olajide-david-b27859383" target="_blank" rel="noreferrer">LinkedIn</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:swiftdigitalservices00@gmail.com">Email</a><a href="#top">Back to top ↑</a></div></footer>
    <a className={`floating-whatsapp ${showFloat ? 'is-visible' : ''}`} href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Swift Digital Services on WhatsApp">WhatsApp <span>↗</span></a>
  </>
}
