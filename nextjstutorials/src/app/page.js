'use client'
import styles from "./page.module.css";
import Home from "./home/page";
export default function Main() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
