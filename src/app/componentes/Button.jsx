import { useRouter } from "next/router"
import styles from "@/styles/photo.module.css";

// Params {
//     name: string,
//     id: string
// }
// Button Component - on click, goes to artist profile
export default function Button({name, id}) {
   const router = useRouter()

   return <button onClick={() => {router.push(`/profile/${id}`)}} type="button" className={styles.button}>{name}</button>
}
