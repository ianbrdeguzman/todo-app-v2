import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="/roadmap">Roadmap</Link>
      <h1>Todo App</h1>
    </div>
  );
}
