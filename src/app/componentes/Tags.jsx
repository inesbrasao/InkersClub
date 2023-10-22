import styles from '@/styles/photo.module.css'


export default function Tags({tagName}) {
   //não recebe nada


   return <button onClick={()=>console.log("ola")} className={styles.tagButton}>{tagName}</button>
}