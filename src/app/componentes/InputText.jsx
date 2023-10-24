import styles from '@/styles/inputText.module.css'


export default function InputText({name, value, onChange, label}, ) {
   // recebe label do input


   //retorna um input type text

   return<div className={styles.containerInputText} >
   {/* <input type="text"> ola </input> */}
   <label htmlFor={name} className={styles.labelInputText}>{label}</label> 
   <input className={styles.inputText} type="text" id={name} name={name}   value={value} onChange={onChange}/>

  

   </div>
}

{/* <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    /> */}