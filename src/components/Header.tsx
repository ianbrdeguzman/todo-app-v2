import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link to="/roadmap" className={styles.link}>
        Roadmap
      </Link>
      <div className={styles.header}>
        <h1>Todo App</h1>
        <button type="button" onClick={() => alert('change theme')}>
          btn
        </button>
      </div>
    </header>
  );
}
