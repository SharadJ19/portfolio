import { Cpu } from 'lucide-react';
import { profile } from '../../data/profileData';
import styles from './Navbar.module.css';

export default function Navbar() {
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
    </header>
  );
}
