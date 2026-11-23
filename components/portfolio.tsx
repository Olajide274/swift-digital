'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const whatsapp = 'https://wa.me/2348165212254?text=Hello%20Swift%20Digital%20Services%2C%20I%27d%20like%20to%20discuss%20a%20website'
const projects = [
  { n: '01', industry: 'HOTEL · KADUNA', name: 'Villa Engracia Suites', problem: 'A boutique hotel website in Kaduna with three room types, a Reserve via WhatsApp button on every room that pre-fills the room and price, gallery, rooftop bar and dining, and directions.', built: 'Three room types with nightly rates and pre-filled reservation links. A considered guide to the gallery, rooftop bar, dining, security and directions.', tags: ['Client project'], url: 'https://engracia-black.vercel.app', kind: 'hotel' },
  { n: '02', industry: 'FASHION & TAILORING · KADUNA', name: 'Kacé', problem: 'A tailoring label needed a better way to turn inspiration into a fitting.', built: 'A collection-led brand site with a save-your-picks shortlist and a request-a-design flow that leads to a fitting.', tags: ['Demo build'], url: 'https://kace-demo.vercel.app', kind: 'fashion' },
  { n: '03', industry: 'PROPERTY', name: 'Kaduna Homes', problem: 'A marketplace concept for people finding a place and the people who care for it.', built: 'A rental experience for browsing, booking and managing properties, connecting owners with verified contractors.', tags: ['Demo build'], url: 'https://kadunahomes.vercel.app', kind: 'property' },
  { n: '04', industry: 'RETAIL', name: 'BTC Essential', problem: 'A simple path from browsing clothes, bags and shoes to placing an order.', built: 'An online store with category filters, quick view, a cart and pay-on-delivery checkout.', tags: ['Demo build'], url: 'https://btc-essential.vercel.app', kind: 'retail' },
  { n: '05', industry: 'OWN PRODUCT', name: 'Swift Digital Quote Tool', problem: 'Help business owners understand what to build before they pay.', built: 'An interactive questionnaire with a live website preview and a price range tailored to the answers.', tags: ['Own product'], url: 'https://swiftdigital.vercel.app', kind: 'tool' },
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

function WhatsAppIcon() { return <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.26-1.64a11.93 11.93 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.91-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/></svg> }
function Mark({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span> }

function ProjectPreview({ project, featured = false }: { project: typeof projects[number]; featured?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const domain = new URL(project.url).hostname
  useEffect(() => {
    const image = imageRef.current
    if (image?.complete && image.naturalWidth > 0) setLoaded(true)
  }, [])
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=1200&h=750`
  return <a className={`device-link ${featured ? 'device-link-featured' : ''}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live site`}>
    <div className="browser-frame">
      <div className="browser-bar"><span className="browser-dots" aria-hidden="true"><i /><i /><i /></span><span>{domain}</span><span aria-hidden="true">↗</span></div>
      <div className={`screenshot-stage ${loaded ? 'is-loaded' : ''}`}>
        <img ref={imageRef} src={screenshotUrl} width="1200" height="750" alt={`${project.name} website screenshot`} loading={featured ? 'eager' : 'lazy'} onLoad={() => setLoaded(true)} />
        {!loaded && <span className="screenshot-loading" aria-hidden="true" />}
      </div>
    </div>
    {project.kind === 'hotel' && <div className="hotel-detail-image"><img src="https://engracia-black.vercel.app/images/hero-1-courtyard.jpg" width="360" height="250" alt="Courtyard at Villa Engracia Suites" loading="lazy" /></div>}
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
    <button className="button button-dark" type="submit"><WhatsAppIcon />Continue on WhatsApp</button>
  </form>
}

export function Portfolio() {
  const [showFloat, setShowFloat] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.8)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const contact = document.querySelector('#contact')
    if (!contact) return
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.12 })
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    const panel = menuPanelRef.current
    const focusable = () => panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    focusable()?.[0]?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); return }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items?.length) return
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1].focus() }
      else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0].focus() }
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKeyDown); menuButtonRef.current?.focus() }
  }, [menuOpen])
  const closeMenu = () => setMenuOpen(false)
  return <>
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Swift Digital Services home">SWIFT<span> / </span>DIGITAL</a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="nav-cta" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Chat on WhatsApp</a><button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(true)}>Menu</button></header>
    {menuOpen && <div className="mobile-menu" id="mobile-menu" ref={menuPanelRef} role="dialog" aria-modal="true" aria-label="Mobile navigation"><div className="mobile-menu-head"><a className="wordmark" href="#top" onClick={closeMenu}>SWIFT<span> / </span>DIGITAL</a><button className="menu-close" type="button" onClick={closeMenu} aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div><nav aria-label="Mobile navigation">{[['Work', '#work'], ['Services', '#services'], ['Process', '#process'], ['Pricing', '#pricing'], ['About', '#about'], ['Contact', '#contact']].map(([label, href], index) => <a href={href} key={href} onClick={closeMenu}><span>0{index + 1}</span>{label}</a>)}</nav><a className="button button-red mobile-menu-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Chat on WhatsApp</a></div>}
    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><Mark>Web design &amp; development · Kaduna, Nigeria</Mark><h1>Websites that fill your <em>inbox</em> with customers.</h1><p className="hero-sub">I design and build fast websites for Nigerian businesses, with WhatsApp booking and ordering built in, so enquiries land on your phone.</p><div className="hero-actions"><a className="button button-red" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Start a WhatsApp chat</a><a className="text-link" href="#work">See the work <span>↓</span></a></div><div className="hero-foot"><span>INDEPENDENT STUDIO</span><span>KADUNA · NIGERIA</span></div></div><div className="hero-visual"><ProjectPreview project={projects[0]} featured /><p className="visual-note"><span>01 / 05</span> A stay, one easy reservation away.</p></div></section>
      <section id="work" className="work-section section-wrap"><div className="section-heading"><div><Mark>01 / Selected work</Mark><h2>Built for the <em>next step.</em></h2></div><p>Real routes from a first look to a booking, order or useful conversation.</p></div>{projects.map((p, i) => <article className={`project-row ${i % 2 ? 'project-reverse' : ''}`} key={p.n}><div className="project-info"><div className="project-meta"><span className="project-number">{p.n}</span><Mark>{p.industry}</Mark></div><h3>{p.name}</h3><p className="project-problem">{p.problem}</p><div className="built"><span className="built-label">WHAT I BUILT</span><p>{p.built}</p></div><div className="project-bottom"><span className="tag">{p.tags[0]}</span><a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">View live site <span>↗</span></a></div></div><ProjectPreview project={p} /></article>)}</section>
      <section className="engineering"><div className="engineering-inner section-wrap"><div className="engineering-title"><Mark>02 / Under the hood</Mark><h2>I also build<br />backend <em>systems.</em></h2><p>For engineering teams and problems that need more than a website.</p><a className="light-link" href="https://michael-olajide-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Engineering portfolio <span>↗</span></a><a className="light-link" href="https://github.com/Olajide274" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a></div><div className="engineering-list"><div className="terminal-line">$ ls ~/selected-systems</div><div className="system-row"><span>01</span><div><strong>Trade Escrow Protocol</strong><p>Go · gRPC · PostgreSQL · Redis<br />Paystack webhooks, tamper-evident audit log</p></div><a href="https://github.com/Olajide274/trade-escrow-protocol" target="_blank" rel="noopener noreferrer" aria-label="Trade Escrow Protocol on GitHub">↗</a></div><div className="system-row"><span>02</span><div><strong>WayTrust</strong><p>Waybill escrow for motor-park clerks<br />Go · Next.js</p></div><span className="system-dash">—</span></div><div className="system-row"><span>03</span><div><strong>CheckAm</strong><p>Lost/stolen phone checker<br />Next.js · PostgreSQL</p></div><a href="https://check-am-kappa.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="CheckAm live site">↗</a></div><div className="system-row"><span>04</span><div><strong>1860 Travels ERP</strong><p>Case study</p></div><a href="https://github.com/Olajide274/1860-travels-erp-case-study" target="_blank" rel="noopener noreferrer" aria-label="1860 Travels ERP case study">↗</a></div></div></div></section>
      <section id="services" className="services-section section-wrap"><div className="section-heading"><div><Mark>03 / Services</Mark><h2>Good work, <em>useful results.</em></h2></div><p>One clear job for every part of your website.</p></div><div className="service-list">{services.map(([title, outcome], i) => <a href="#contact" className="service-row" key={title}><span className="service-num">0{i + 1}</span><h3>{title}</h3><p>{outcome}</p><span className="service-arrow">↗</span></a>)}</div></section>
      <section id="process" className="process-section"><div className="section-wrap"><div className="section-heading"><div><Mark>04 / Process</Mark><h2>Clear steps. <em>No surprises.</em></h2></div></div><div className="timeline">{[['01', 'Talk on WhatsApp', 'Tell me what your business needs.'], ['02', 'See a preview', 'Review the direction before the full build.'], ['03', 'Build & review', 'We shape the details together.'], ['04', 'Launch & support', 'Go live, with help when you need it.']].map(([n, title, body]) => <div className="timeline-step" key={n}><span>{n}</span><i /><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
      <section id="pricing" className="pricing-section section-wrap"><div className="section-heading"><div><Mark>05 / Pricing</Mark><h2>Start with the <em>right scope.</em></h2></div><p>Final pricing depends on the pages and features your business needs.</p></div><div className="pricing-grid">{[['01', 'Landing Page', '₦150,000', ['Single page', 'WhatsApp button', 'Mobile-first', 'Google-ready basics']], ['02', 'Business Website', '₦350,000', ['Multi-page', 'WhatsApp booking/ordering', 'Google Business Profile setup', 'Gallery/menu/rooms or products']], ['03', 'Custom System', '₦550,000', ['Admin dashboard', 'Bookings/stock/inventory features', 'User accounts', 'Built to your workflow']]].map(([n, name, amount, items]) => <article className={`price-item ${name === 'Business Website' ? 'price-recommended' : ''}`} key={name as string}>{name === 'Business Website' && <span className="most-chosen">Most chosen</span>}<Mark>{n} / PACKAGE</Mark><h3>{name}</h3><p className="price-amount">From <span>{amount}</span></p><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul><a href="#contact" className="text-link">Discuss this package <span>↗</span></a></article>)}</div><p className="pricing-note">Domain and hosting guidance included. Final price depends on scope.</p></section>
      <section id="about" className="about-section"><div className="about-inner section-wrap"><div className="portrait"><div className="portrait-placeholder"><Image src="/images/michael-olajide-david-clear.png" alt="Michael Olajide David, founder of Swift Digital Services" fill sizes="(max-width: 640px) 260px, 365px" /><span className="portrait-caption">MICHAEL OLAJIDE DAVID · KADUNA</span></div></div><div className="about-copy"><Mark>06 / About</Mark><h2>Independent by choice.<br /><em>Useful by design.</em></h2><p>I&apos;m <a href="https://github.com/Olajide274" target="_blank" rel="noopener noreferrer">Michael Olajide David</a>, founder of Swift Digital Services, a full-stack developer in Kaduna.</p><p>I build client sites and my own software products.</p><p>BSc Physics with Electronics, AFIT. Every site I ship carries a small “Website by Swift Digital Services” credit.</p><a className="text-link" href="https://www.linkedin.com/in/michael-olajide-david-b27859383" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a><a className="text-link" href="#contact">A little about your project <span>↗</span></a></div></div></section>
      <section className="faq-section section-wrap"><div className="faq-heading"><Mark>07 / FAQ</Mark><h2>A few <em>good questions.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="contact-section"><div className="contact-inner section-wrap"><div className="contact-copy"><Mark>08 / Contact</Mark><h2>Tell me about<br />your <em>business.</em></h2><a className="button button-red" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Chat on WhatsApp</a><div className="contact-details"><a href="tel:+2348165212254">0816 521 2254</a><a href="mailto:swiftdigitalservices00@gmail.com">swiftdigitalservices00@gmail.com</a><p>Kaduna, Nigeria. Working with clients across Nigeria.</p></div></div><div className="form-wrap"><Mark>OR SEND A QUICK BRIEF</Mark><ContactForm /></div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#top">SWIFT<span> / </span>DIGITAL</a><span>© 2026 Swift Digital Services</span><div><a href="https://github.com/Olajide274" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/michael-olajide-david-b27859383" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp</a><a href="mailto:swiftdigitalservices00@gmail.com">Email</a><a href="#top">Back to top ↑</a></div></footer>
    <a className={`floating-whatsapp ${showFloat && !contactVisible ? 'is-visible' : ''}`} href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" tabIndex={showFloat && !contactVisible ? 0 : -1}><WhatsAppIcon /></a>
  </>
}
