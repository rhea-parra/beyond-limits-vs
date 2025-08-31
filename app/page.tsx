
'use client'
import { useRef } from 'react'

function SectionHeader({id, title, desc}:{id:string,title:string,desc:string}){
  return (
    <header className="container" id={id}>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{desc}</p>
    </header>
  )
}

export default function Page(){
  const heroRef = useRef<HTMLDivElement>(null)

  const move = (e: React.MouseEvent) => {
    const r = heroRef.current?.getBoundingClientRect()
    if(!r) return
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    heroRef.current?.style.setProperty('--mx', x + 'px')
    heroRef.current?.style.setProperty('--my', y + 'px')
  }

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero" ref={heroRef} onMouseMove={move}>
        <div className="spot" aria-hidden="true" />
        <div className="container">
          <div style={{maxWidth:1100}}>
            <h1 className="title">Your Tech‑Savvy VA for <span className="subtitle">Strategic Growth</span></h1>
            <p className="lead">
              I help founders and teams save time and scale smarter with admin ops, CRM, analytics, and
              growth workflows. From dashboards and SEO to automation and documentation — I take care
              of the busywork so you can focus on growth.
            </p>
            <div style={{display:'flex', gap:12, marginTop:18}}>
              <a className="btn" href="#services">See Services</a>
              <a className="btn" href="#contact">Book a Free Discovery Call</a>
            </div>

            {/* Stats */}
            <div className="grid stats">
              {[
                {k:'6+', v:'Years Experience'},
                {k:'50+', v:'Happy Clients'},
                {k:'40%', v:'Productivity Boost'},
                {k:'24/7', v:'Support Available'},
              ].map((s,i)=> (
                <div key={i} className="card" aria-label={s.v}>
                  <div className="stat">{s.k}</div>
                  <div style={{color:'var(--muted)'}}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <SectionHeader
          id="services-h"
          title="Services"
          desc="Flexible, outcomes‑focused support spanning admin ops, CRM, marketing ops, and analytics."
        />
        <div className="container grid" style={{gridTemplateColumns:'repeat(2,minmax(0,1fr))'}}>
          {[
            {t:'Executive & Admin Ops', items:['Inbox & calendar mastery','Travel, vendors & logistics','SOPs & documentation']},
            {t:'CRM & Sales Ops', items:['HubSpot / Zoho setup','Lead routing & automation','Deduping & hygiene']},
            {t:'Marketing Ops & SEO', items:['On‑page fixes','Content scheduling','UTMs & analytics']},
            {t:'Analytics & Reporting', items:['Weekly KPI snapshots','Dashboards (Sheets/BI)','Insights & actions']},
          ].map((c,i)=> (
            <div className="card" key={i}>
              <h3>{c.t}</h3>
              <ul style={{margin:0,paddingLeft:18,color:'var(--muted)'}}>
                {c.items.map((it,ix)=>(<li key={ix}>{it}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <SectionHeader
          id="projects-h"
          title="Projects"
          desc="A few snapshots of recent wins—streamlined ops, cleaner data, and clearer reporting."
        />
        <div className="container grid" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
          {[
            {t:'CRM Cleanup & Automation', d:'De‑duplicated records and automated lead routing; reply rates +22%.'},
            {t:'Founder Inbox Triage', d:'Priority filters & macros that cut daily email time 90 → 30 minutes.'},
            {t:'SEO Lite Tune‑Up', d:'+18% organic clicks in 60 days via on‑page fixes & cadence.'},
            {t:'Weekly KPI Snapshot', d:'Exec‑ready dashboard updated in 10 minutes weekly.'},
          ].map((p,i)=> (
            <article className="card project" key={i}>
              <a className="github" href="https://github.com/rhea-parra" target="_blank" rel="noreferrer" aria-label="Open GitHub">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53v-1.87c-3.05.66-3.69-1.3-3.69-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.39-1.19.72-1.46-2.43-.28-4.99-1.22-4.99-5.45 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.12.88-.24 1.82-.36 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.41 3.02-1.12 3.02-1.12.6 1.55.22 2.7.11 2.98.7.77 1.13 1.74 1.13 2.94 0 4.24-2.57 5.16-5 5.44.4.34.76 1 .76 2.02v2.99c0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/></svg>
              </a>
              <h3>{p.t}</h3>
              <p style={{color:'var(--muted)'}}>{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
<section id="skills">
  <SectionHeader
    id="skills-h"
    title="Skills"
    desc="Arsenal of tools to supercharge your operations and growth."
  />
  <div
    className="container grid"
    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
  >
    {[
      {
        t: "Data Mastery",
        items: [
          "Power BI",
          "Tableau",
          "Microsoft Excel",
          "Google Sheets",
          "SQL",
          "Python",
          "Google Analytics",
        ],
      },
      {
        t: "CRM & Sales Powerhouse",
        items: [
          "Apollo.io",
          "HubSpot",
          "Go High Level",
          "Salesforce",
          "LinkedIn Sales Navigator",
          "Zoho CRM",
        ],
      },
      {
        t: "Digital Marketing Pro",
        items: [
          "Meta Business Suite",
          "Facebook Ads Manager",
          "Google Ads",
          "Email Marketing",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
        ],
      },
      {
        t: "Creative Design Studio",
        items: [
          "Canva",
          "Adobe Photoshop",
          "Illustrator",
          "Figma",
          "Cap Cut",
          "Adobe Premiere Pro",
          "After Effects",
        ],
      },
      {
        t: "Web Development",
        items: [
          "WordPress",
          "Elementor",
          "WooCommerce",
          "SEO Plugins (Yoast, Rank Math)",
          "Visio",
        ],
      },
      {
        t: "Project Command Center",
        items: [
          "ClickUp",
          "Monday.com",
          "Trello",
          "Airtable",
          "Slack",
        ],
      },
      {
        t: "Social Media Domination",
        items: [
          "Buffer",
          "Hootsuite",
          "Asana",
          "Content Strategy",
          "Community Management",
        ],
      },
      {
        t: "Financial Operations",
        items: [
          "QuickBooks",
          "Xero",
          "Financial Reporting",
          "Budget Management",
        ],
      },
      {
        t: "Other Tools",
        items: [
          "Zapier",
          "Make (Integromat)",
          "Microsoft Teams",
          "GitHub",
          "GitLab",
        ],
      },
    ].map((c, i) => (
      <div className="card" key={i}>
        <h3>{c.t}</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
          {c.items.map((it, ix) => (
            <li key={ix}>{it}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


      {/* ABOUT */}
      <section id="about">
        <SectionHeader
          id="about-h"
          title="About"
          desc="Calm execution, systems thinking, and tools expertise so you can stay focused on strategy."
        />
        <div className="container grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div className="card">
            <p style={{marginTop:0,color:'var(--muted)'}}>
              I bring calm execution and systems thinking so you can stay focused on strategy.
              Tools I live in: HubSpot, Airtable, Notion, Google Workspace, Slack, GA/GSC and more.
            </p>
          </div>
          <div className="card">
            <h3>Testimonials</h3>
            <p style={{color:'var(--muted)'}}>
              “Rhea transformed our operations completely. Best investment we made.” — CEO, TechStart
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <SectionHeader
          id="contact-h"
          title="Contact"
          desc="Ready to accelerate your ops? Book a discovery call or drop a message—I'll reply within one business day."
        />
        <div className="container grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div className="card">
            <h3>Let’s build momentum</h3>
            <ul style={{marginTop:8,color:'var(--muted)'}}>
              <li>Response within 1 business day</li>
              <li>Flexible engagement (project or ongoing)</li>
              <li>Clear outcomes and reporting</li>
            </ul>
            <a className="btn" href="mailto:hello@rheaparra.com">Email Me</a>
          </div>
          <form className="card" onSubmit={e=>e.preventDefault()}>
            <label>Name<br/><input required placeholder="Your name" style={{width:'100%',padding:'12px 14px',borderRadius:12,border:'1px solid #ffffff22',background:'#ffffff08',color:'var(--text)'}}/></label>
            <div style={{height:10}}/>
            <label>Email<br/><input required type="email" placeholder="you@email.com" style={{width:'100%',padding:'12px 14px',borderRadius:12,border:'1px solid #ffffff22',background:'#ffffff08',color:'var(--text)'}}/></label>
            <div style={{height:10}}/>
            <label>Message<br/><textarea rows={5} placeholder="How can I help?" style={{width:'100%',padding:'12px 14px',borderRadius:12,border:'1px solid #ffffff22',background:'#ffffff08',color:'var(--text)'}}/></label>
            <div style={{height:12}}/>
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}
