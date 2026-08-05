import { Cpu, LayoutGrid, TerminalSquare } from 'lucide-react';
import { profile } from '../../data/profileData';
import styles from './Navbar.module.css';

interface NavbarProps {
  mode: 'executive' | 'terminal';
  onModeChange: (mode: 'executive' | 'terminal') => void;
}

export default function Navbar({ mode, onModeChange }: NavbarProps) {
  const handle = profile.name.toLowerCase().split(' ')[0];

  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.prompt}>~/{handle}_</span>
        <span className={styles.osBadge} title={profile.osBadge}>
          <Cpu size={13} />
          {profile.osBadge}
        </span>
      </div>

      <div className={styles.toggleGroup} role='tablist' aria-label='View mode'>
        <button
          type='button'
          role='tab'
          aria-selected={mode === 'executive'}
          className={`${styles.toggleBtn} ${mode === 'executive' ? styles.active : ''}`}
          onClick={() => onModeChange('executive')}
        >
          <LayoutGrid size={16} />
          Executive
        </button>
        <button
          type='button'
          role='tab'
          aria-selected={mode === 'terminal'}
          className={`${styles.toggleBtn} ${mode === 'terminal' ? styles.active : ''}`}
          onClick={() => onModeChange('terminal')}
        >
          <TerminalSquare size={16} />
          Terminal
        </button>
      </div>
    </header>
  );
}
