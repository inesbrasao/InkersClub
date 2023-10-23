import styles from '@/styles/photo.module.css'
import { useRouter } from "next/router"


export default function Tag({tagName}) {
   const router = useRouter()


   return <button onClick={() => router.push(`/home?tag=${tagName}&name=&city=`)} className={styles.tagButton}>{tagName}</button>
}