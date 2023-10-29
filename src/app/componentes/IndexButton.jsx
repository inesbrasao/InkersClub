import styles from "@/styles/index.module.css";
import { useRouter } from "next/router";


export default function Button({path, name}) {
   const router = useRouter()

   return <button onClick={() => {router.push(`${path}`)}} type="button" className={styles.indexbutton}>{name}</button>
}
