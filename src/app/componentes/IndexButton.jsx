import styles from "@/styles/photo.module.css";
import { useRouter } from "next/router";

 
export default function Button({path,name}) {
   // recebe "conteudo" do botão
   const router = useRouter()


//retorna um botão


// return <button type="button" className={styles.button}>{name}</button>}

   //retorna um botão


   return <button onClick={() => {router.push(`${path}`)}} type="button" className={styles.button}>{name}</button>
}
