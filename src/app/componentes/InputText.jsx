import styles from '@/styles/styles.module.css'

export default function InputText({name, value, onChange}, ) {
   // recebe label do input


   //retorna um input type text

   return<div className={styles.inputText} >
   {/* <input type="text"> ola </input> */}
   <label htmlFor={name}>"nome"</label> <br/>
   <input type="text" id={name} name={name}   value={value} onChange={onChange}/>

  

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