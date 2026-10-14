import { independentProjects, profile, skillGroupLabels } from '../data/profile'
import { ResumeDownload } from './portfolio'

export function ResumeContent() {
  return (
    <main id="main-content" className="resume-page" tabIndex={-1}>
      <p className="resume-subtitle">{profile.title}</p>
      <p>
        {profile.location} · <a href={profile.links.email}>{profile.email}</a> ·{' '}
        <a href={profile.links.github}>GitHub</a> ·{' '}
        <a href={profile.links.linkedin}>LinkedIn</a>
      </p>
      <ResumeDownload />
      <h2>Summary</h2>
      <p>{profile.resumeSummary}</p>
      <p>{profile.learningApproach}</p>
      <h2 id="skills">Core skills</h2>
      {Object.entries(profile.skills).map(([group, skills]) => (
        <p key={group}>
          <strong>{skillGroupLabels[group]}:</strong> {skills.join(', ')}
        </p>
      ))}
      <h2 id="experience">Experience</h2>
      {profile.roles.map((role) => (
        <section
          key={role.id}
          className="resume-entry"
          id={`experience-${role.id}`}
        >
          <h3>
            {role.company} · {role.title}
          </h3>
          <p>
            {role.period} · {role.location}
          </p>
          <ul>
            {role.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {role.publicWork && (
            <p>
              Public work:{' '}
              {role.publicWork.map((item, i) => (
                <span key={item.url}>
                  {i > 0 && ', '}
                  <a href={item.url}>{item.name}</a>
                </span>
              ))}
              .
            </p>
          )}
        </section>
      ))}
      <h3>Earlier experience</h3>
      {profile.earlierRoles.map((role) => (
        <p key={role.id} id={`experience-${role.id}`}>
          <strong>{role.company}</strong>, {role.title} ({role.period}) ·{' '}
          {role.summary}
        </p>
      ))}
      <h2>Selected projects</h2>
      {independentProjects.map((project) => (
        <section key={project.id} id={`project-${project.id}`}>
          <h3>
            <a href={project.href}>{project.name}</a>
          </h3>
          <p>{project.built}</p>
          {project.storyHref && (
            <p>
              <a href={project.storyHref}>Read the story</a>
            </p>
          )}
        </section>
      ))}
      <h2 id="education">Education and achievements</h2>
      <p>{profile.education}</p>
      <ul>
        {profile.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Recommendations</h2>
      <p>
        <a href="/recommendations">Read recommendations</a> from engineering
        leaders and collaborators.
      </p>
    </main>
  )
}
