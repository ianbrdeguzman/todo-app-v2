import Form from '../components/Form';
import Header from '../components/Header';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Form />
    </div>
  );
}
