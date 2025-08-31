
'use client'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar(){
  return (
    <nav className="nav" aria-label="Primary">
      <div className="container nav-inner">
        <Link className="brand" href="#home">
          <Image src="/logo.png" alt="Rhea Parra logo" width={26} height={26} priority />
          <span>Rhea Parra</span>
        </Link>
        <div>
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
