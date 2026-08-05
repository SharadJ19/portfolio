import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  tone?: 'default' | 'cyan' | 'purple' | 'green';
}

export default function Badge({ children, tone = 'default' }: BadgeProps) {
  const toneClass = styles[tone] ? styles[tone] : '';
  return <span className={`${styles.badge} ${toneClass}`}>{children}</span>;
}
