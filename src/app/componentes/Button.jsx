import styles from '@/styles/styles.module.css'

export default function Button({name}) {
   // recebe "conteudo" do botão


   //retorna um botão


   return <button type="button" className={styles.button}>{name}</button>
}