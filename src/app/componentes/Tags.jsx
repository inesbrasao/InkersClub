import styles from '@/styles/photo.module.css'
import { useRouter } from "next/router"


export default function Tag({tagName, changeParams}) {
   const router = useRouter()

   const handleClick = (event) => {
      if(typeof changeParams !== "function"){
         router.push(`/home?tag=${tagName}&name=&city=`)
      } else {
         changeParams({tag: tagName, name: undefined, city: undefined })
      }
   }

   return <button onClick={handleClick} className={styles.tagButton}>{tagName}</button>
}