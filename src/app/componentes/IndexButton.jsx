import styles from "@/styles/index.module.css";
import { useRouter } from "next/router";

// Params {
//     path: string,
//     name: string
// }
// IndexButton Component - Buttons on Index page
export default function Button({path, name}) {
   const router = useRouter()

   return <button onClick={() => {router.push(`${path}`)}} type="button" className={styles.indexbutton}>{name}</button>
}
