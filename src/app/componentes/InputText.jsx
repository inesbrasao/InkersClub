import styles from '@/styles/styles.module.css'

export default function InputText(props) {
   // recebe label do input


   //retorna um input type text

   return<div className={styles.inputText} >
   {/* <input type="text"> ola </input> */}
   <label for={props.name}>{props.name}</label>
   <input type="text" id={props.id} name={props.name}  />

  

   </div>
}