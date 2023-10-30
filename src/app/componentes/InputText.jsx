import styles from '@/styles/profileControl.module.css'

// Params {
//     name: string,
//     value: string,
//     onChange: function
//     label: string
// }
// InputText Component - shows in the form input the existing value in the DB.
export default function InputText({name, value, onChange, label}, ) {

   return<div className={styles.containerInputText} >
   <label htmlFor={name} className={styles.labelInputText}>{label}</label> 
   <input className={styles.inputText} type="text" id={name} name={name}   value={value} onChange={onChange}/>

  

   </div>
}