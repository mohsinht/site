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
            {profile.summary} I’m currently at OnService.AI, building Python
            services and conversational AI experiences for airline workflows.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="button button-primary">
              View selected work <Icon name="arrow" size={16} />
            </a>
            <Link href="/resume" className="button button-secondary">
              View résumé
            </Link>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-portrait">
          <Image
            src={profile.portrait}
            alt="Portrait of Mohsin Hayat"
            width={1000}
            height={1000}
            sizes="(max-width: 760px) 180px, 280px"
            priority
          />
        </div>
      </section>

      <section className="proof-grid" aria-label="Selected engineering context">
        {profile.metrics.map((metric) => (
          <article className="proof-item" key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section
        className="section recommendations"
        aria-labelledby="recommendations-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Professional references</p>
          <h2 id="recommendations-title">Trusted by engineering leaders</h2>
          <Link href="/recommendations">
            Read all recommendations <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="recommendation-grid">
          {profile.recommendations.map((item) => (
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
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Systems built for real operating contexts</h2>
        </div>
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div>
                  <dt>Context</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>
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
        className="section capability-section"
        aria-labelledby="capabilities-title"
      >
        <p className="eyebrow">Capabilities</p>
        <h2 id="capabilities-title">Focused engineering capabilities</h2>
        <ul>
          {profile.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
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
            The published posts are personal writing from 2022 on remote work
            and engineering. They are retained as dated perspectives, not
            presented as current AI case studies.
          </p>
        </div>
        <Link href="/posts" className="button button-secondary">
          Browse writing
        </Link>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <p className="eyebrow">Let’s connect</p>
        <h2 id="contact-title">Build reliable systems together</h2>
        <p>
          Based in Lahore, Pakistan, with 6+ years of international remote
          collaboration experience.
        </p>
        <div className="contact-links">
          <a href={profile.links.email}>Email Mohsin</a>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
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
