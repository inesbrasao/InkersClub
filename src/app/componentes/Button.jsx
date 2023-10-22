
import styles from "@/styles/photo.module.css";

export default function Button({ name }) {
  // recebe "conteudo" do botão

import styles from '@/styles/photo.module.css'
import { useRouter } from 'next/router'


export default function Button({name, id}) {
   // recebe "conteudo" do botão
   const router = useRouter()


   return (
     <button
       type="button"
       onClick={Handlechange}
     >
       {text}
     </button>
   );
 
   }
//retorna um botão


// return <button type="button" className={styles.button}>{name}</button>}

   //retorna um botão


   return <button onClick={() => {router.push(`/profile/${id}`)}} type="button" className={styles.button}>{name}</button>
}
