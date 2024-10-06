import Login from "@/widgets/login/Login";
import styles from '@/app/page.module.scss'
export default function Home() {
  return (
    <main className={styles.page__wrapper}>
      <Login/>
    </main>
  );
}
