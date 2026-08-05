import { MapPin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profile, skills, experience, projects, education } from '../../data/profileData';
import type { Skills } from '../../types/profile';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import Badge from '../common/Badge/Badge';
import styles from './ExecutiveView.module.css';

export default function ExecutiveView() {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          <MapPin size={14} />
          {profile.location}
        </p>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.role}>{profile.role}</h2>
        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.contactRow}>
          <a href={`mailto:${profile.email}`} className={styles.contactLink}>
            <Mail size={16} /> Email
          </a>
          <a
            href={profile.links.github}
            target='_blank'
            rel='noreferrer'
            className={styles.contactLink}
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target='_blank'
            rel='noreferrer'
            className={styles.contactLink}
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.links.website}
            target='_blank'
            rel='noreferrer'
            className={styles.contactLink}
          >
            <ExternalLink size={16} /> Website
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Code2 size={18} /> Tech Stack
        </h3>
        <div className={styles.skillGroups}>
          {(Object.entries(skills) as [keyof Skills, string[]][]).map(
            ([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <span className={styles.skillCategory}>{category}</span>
                <div className={styles.skillBadges}>
                  {items.map((item: string) => (
                    <Badge key={item} tone='cyan'>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Experience timeline */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Experience</h3>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Featured Projects</h3>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        {education.map((e) => (
          <div key={e.id} className={styles.eduCard}>
            <div className={styles.eduHeader}>
              <span className={styles.eduDegree}>{e.degree}</span>
              <span className={styles.eduPeriod}>{e.period}</span>
            </div>
            <span className={styles.eduInstitution}>
              {e.institution} — {e.location}
            </span>
            <div className={styles.skillBadges}>
              {e.coursework.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
