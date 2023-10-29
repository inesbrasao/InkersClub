import styles from '@/styles/tag.module.css'
import { useRouter } from "next/router"


export default function Tag({tagName, changeParams}) {
   const router = useRouter()

   const handleClick = () => {
      if(typeof changeParams !== "function"){
         router.push(`/home?tag=${tagName}&name=&city=`)
      } else {
         changeParams({tag: tagName, name: undefined, city: undefined })
      }
   }

   return <button key={tagName} onClick={handleClick} className={styles.tagButton}>{tagName}</button>
}