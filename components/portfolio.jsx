import Image from 'next/image'
import Link from 'next/link'
import { profile, recommendationUrl } from '../data/profile'
import { Icon } from './icons'

function ExternalLink({ href, children = null, className = '', ...props }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Professional links">
      <ExternalLink
        href={profile.links.github}
        className="icon-link"
        aria-label="Mohsin Hayat on GitHub"
      >
        <Icon name="github" />
      </ExternalLink>
      <ExternalLink
        href={profile.links.linkedin}
        className="icon-link"
        aria-label="Mohsin Hayat on LinkedIn"
      >
        <Icon name="linkedin" />
      </ExternalLink>
      <a
        href={profile.links.email}
        className="icon-link"
        aria-label="Email Mohsin Hayat"
      >
        <Icon name="mail" />
      </a>
    </div>
  )
}

export function PortfolioHome() {
  return (
    <main id="main-content" className="portfolio-home">
      <section className="hero" aria-labelledby="portfolio-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Applied AI · Backend systems · International remote engineering
          </p>
          <h1 id="portfolio-title">Mohsin Hayat</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">
            I’m a software engineer based in Lahore, Pakistan. For more than six
            years, I’ve worked remotely with international teams building
            software for airlines, ecommerce companies, and healthcare
            platforms.
          </p>
          <p className="hero-summary">
            I’m currently at OnService.AI, where I work on Python services and
            conversational AI for airline workflows, including integrations with
            KIU PSS. Before that, I built AI tools at Trafilea and backend and
            event-driven systems at Awell Health.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="button button-primary">
              Explore selected work <Icon name="arrow" size={16} />
            </a>
            <Link href="/resume" className="button button-secondary">
              Read my résumé
            </Link>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-portrait">
          <Image
            src={profile.portrait}
            alt="Mohsin Hayat, Senior Software Engineer"
            width={1000}
            height={1000}
            sizes="(max-width: 760px) 180px, 280px"
            priority
          />
        </div>
      </section>

      <section
        className="section recommendations"
        aria-labelledby="recommendations-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Professional references</p>
            <h2 id="recommendations-title">What colleagues say</h2>
          </div>
          <Link href="/recommendations">
            Read all verified recommendations <Icon name="arrow" size={16} />
          </Link>
        </div>
        <p className="section-intro">
          The best description of how I work comes from the people who have
          worked alongside me.
        </p>
        <div className="recommendation-grid">
          {profile.recommendations.slice(0, 2).map((item) => (
            <article className="recommendation-card" key={item.name}>
              <p>“{item.excerpt}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <ExternalLink href={recommendationUrl}>
                  Verify on LinkedIn
                </ExternalLink>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section
        id="selected-work"
        className="section"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Selected work</h2>
          </div>
        </div>
        <p className="section-intro">
          These products best represent the kind of engineering I enjoy:
          practical AI, dependable backend services, and tools that solve real
          problems.
        </p>
        <div className="featured-work">
          {profile.projects.slice(0, 2).map((project) => (
            <article className="work-feature" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.homepageSummary}</p>
              <p>{project.homepageDetail}</p>
              <ul
                className="technology-list"
                aria-label={`${project.name} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.href && (
                <ExternalLink href={project.href} className="text-link">
                  Visit {project.name} <Icon name="arrow" size={16} />
                </ExternalLink>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        className="section experience-section"
        aria-labelledby="experience-title"
      >
        <p className="eyebrow">Professional experience</p>
        <h2 id="experience-title">
          Experience across applied AI and backend engineering
        </h2>
        <p className="section-intro">
          Much of my professional work lives inside private company systems, so
          I cannot publish the code. I can, however, explain the problems I
          worked on and the engineering behind them.
        </p>
        <div className="experience-grid">
          <article>
            <h3>Airline conversational systems</h3>
            <p>
              At OnService.AI, I build Python services and conversational
              experiences for airline workflows. My work includes integrating AI
              agents with KIU PSS and supporting journeys around booking
              information, payments, check-in, flight changes, ancillary
              services, and passenger support.
            </p>
          </article>
          <article>
            <h3>AI for ecommerce analytics</h3>
            <p>
              At Trafilea, I worked on production AI tools for marketing and
              analytics teams. This included a conversational NL-to-SQL system,
              LangGraph workflows for budget planning, and data pipelines
              supporting long-running analytical agents.
            </p>
          </article>
          <article>
            <h3>Event-driven healthcare platforms</h3>
            <p>
              At Awell Health, I worked on the backend systems behind clinical
              workflow automation. I contributed across orchestration, task
              management, workflow design, event-driven architecture, testing,
              deployment, and open-source tools.
            </p>
          </article>
        </div>
        <Link href="/resume" className="text-link experience-link">
          See my complete work history <Icon name="arrow" size={16} />
        </Link>
      </section>

      <section
        className="section capability-section"
        aria-labelledby="capabilities-title"
      >
        <p className="eyebrow">Engineering focus</p>
        <h2 id="capabilities-title">Applied AI, backed by solid systems</h2>
        <p>
          I work primarily on applied AI systems and the backend infrastructure
          needed to make them dependable. My recent work includes LLM agents,
          multi-agent orchestration, NL-to-SQL, RAG, Python services, analytical
          data pipelines, event-driven systems, and developer tooling.
        </p>
        <p>
          I regularly work with Python, TypeScript, LangGraph, LangChain,
          FastAPI, Node.js, AWS, ClickHouse, PostgreSQL, Docker, and Kubernetes.
          I care more about choosing the right tool for the system than
          collecting technologies for a list.
        </p>
      </section>

      <section
        className="section writing-section"
        aria-labelledby="writing-title"
      >
        <div>
          <p className="eyebrow">Public writing</p>
          <h2 id="writing-title">
            Engineering notes and career retrospectives
          </h2>
          <p>
            I occasionally write about engineering, remote work, and lessons
            from building an international software career from Pakistan. The
            existing notes were written in 2022 and reflect what I was learning
            at that point in my career.
          </p>
        </div>
        <Link href="/posts" className="button button-secondary">
          Browse my engineering notes
        </Link>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title">Let’s connect</h2>
        <p>
          I’m based in Lahore and have worked remotely with teams across the
          United States, Europe, and Latin America.
        </p>
        <div className="contact-links">
          <a href={profile.links.email}>Email Mohsin</a>
          <ExternalLink href={profile.links.linkedin}>
            Connect on LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.links.github}>
            Follow my work on GitHub
          </ExternalLink>
        </div>
      </section>
    </main>
  )
}

export function ResumeDownload() {
  return (
    <a
      className="button button-secondary"
      href="/downloads/Mohsin_Hayat_Resume.pdf"
      download
    >
      Download résumé (PDF)
    </a>
  )
}
