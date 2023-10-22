import styles from '@/styles/photo.module.css'
import { useRouter } from 'next/router'


export default function Button({name, id}) {
   // recebe "conteudo" do botão
   const router = useRouter()


   //retorna um botão


   return <button onClick={() => {router.push(`/profile/${id}`)}} type="button" className={styles.button}>{name}</button>
}