import { useRouter } from "next/router"
import styles from "@/styles/navbar.module.css";

// Params {
// }
// NavBar Component
export default function NavBar() {

   const router = useRouter()



   return <>
   <div className={styles.nav}>
   <button className={styles.button} onClick={() => router.push('/home')}><img className={styles.icon} src="/icons/search-button.svg" alt="" /></button>
   <button className={styles.button} onClick={() => router.push('/')}><img className={styles.icon} src="/icons/home-button.svg" alt="" /></button>
   <button className={styles.button} onClick={() => router.back()}><img className={styles.icon} src="/icons/return-button.svg" alt="" /></button>
   </div>
   </>
}