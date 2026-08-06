import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Badge from '../common/Badge/Badge';
import type { Project } from '../../types/profile';
import styles from './ExecutiveView.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.expIcon}>
        <FolderGit2 size={18} />
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectHeader}>
          <h4 className={styles.projectName}>{project.name}</h4>
        </div>
        <p className={styles.projectSubtitle}>{project.subtitle}</p>
        <p className={styles.projectDesc}>{project.description}</p>

        <div className={styles.skillBadges}>
          {project.stack.map((tech) => (
            <Badge key={tech} tone='purple'>
              {tech}
            </Badge>
          ))}
        </div>

        <ul className={styles.expList}>
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>

        <div className={styles.projectLinks}>
          {project.links.live && (
            <a
              href={project.links.live}
              target='_blank'
              rel='noreferrer'
              className={styles.contactLink}
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target='_blank'
              rel='noreferrer'
              className={styles.contactLink}
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
