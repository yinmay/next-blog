import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useCallback } from 'react';
import a from 'assets/1.png';

export default function Home() {
  const clickMe = useCallback(() => console.log(123), []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>123</main>
      <button onClick={clickMe}>clickMe</button>
      <Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
        <a>
          <img src={a} alt='Vercel Logo' className={styles.logo} />
        </a>
      </Link>
    </div>
  );
}
