import styles from '@/styles/styles.module.css'


export default function Tags({tagName}) {
   //não recebe nada


   return <button onClick={()=>console.log("ola")} className={styles.tagButton}>{tagName}</button>
}