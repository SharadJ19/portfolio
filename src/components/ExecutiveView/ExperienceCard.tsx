import { Briefcase } from 'lucide-react';
import type { Experience } from '../../types/profile';
import styles from './ExecutiveView.module.css';

interface ExperienceCardProps {
  job: Experience;
}

export default function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <article className={styles.expCard}>
      <div className={styles.expIcon}>
        <Briefcase size={18} />
      </div>
      <div className={styles.expBody}>
        <div className={styles.expHeader}>
          <h4 className={styles.expRole}>{job.role}</h4>
          <span className={styles.expPeriod}>{job.period}</span>
        </div>
        <p className={styles.expCompany}>
          {job.company} · {job.location}
        </p>
        <ul className={styles.expList}>
          {job.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
