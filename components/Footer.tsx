
import Link from 'next/link'

export default function Footer(){
  return (
    <footer>
      <div className="container footer-row">
        <small>© {new Date().getFullYear()} Rhea Parra. All rights reserved.</small>
        <div style={{display:'flex', gap:10}}>
          <a className="icon-btn" aria-label="Email Rhea" href="mailto:hello@rheaparra.com" title="hello@rheaparra.com">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a className="icon-btn" aria-label="GitHub" href="https://github.com/rhea-parra" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" role="img">
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53v-1.87c-3.05.66-3.69-1.3-3.69-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.39-1.19.72-1.46-2.43-.28-4.99-1.22-4.99-5.45 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.12.88-.24 1.82-.36 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.41 3.02-1.12 3.02-1.12.6 1.55.22 2.7.11 2.98.7.77 1.13 1.74 1.13 2.94 0 4.24-2.57 5.16-5 5.44.4.34.76 1 .76 2.02v2.99c0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/>
            </svg>
          </a>
          <a className="icon-btn" aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4zM8 8h3.8v2.1h.05c.53-1 1.84-2.1 3.78-2.1C20.2 8 23 10.5 23 15.1V23h-4v-6.8c0-1.6-.03-3.7-2.3-3.7-2.3 0-2.65 1.8-2.65 3.6V23H8z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
