
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '@/styles/login.module.css'
import Logo from "@/app/componentes/Logo";
import InputText from "@/app/componentes/InputText";

export default function Login() {
  const [formData, setFormData] = useState()

  const router = useRouter()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(formData)
  }

  async function login() {
    const res = await fetch('/api/login', options)

    if (res.status === 200) {
      const body = await res.json();

     router.push(`/myprofile/${body}`)
      console.log(body)
    }

  }


  const handleSubmit = (event) => {
    event.preventDefault();

    login(formData)
    console.log(formData)

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, name)
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (<div >
    <div className={styles.backButtonContainer}>
    <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
    </div>
    <div className={styles.loginContainer}>
    <div>
      <Logo />
    </div>
    
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Criar Conta</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputText name="email" label="Email" onChange={handleChange} />
        <InputText name="password" label="Senha" onChange={handleChange} />
      

        <button className={styles.button} type="submit" >Entrar</button>
      </form>
    </div>
    <div className={styles.signupContainer}>
      <p>ainda não tem uma conta?</p>
      <button className={styles.signupbutton} onClick={() => { router.push(`/signup`) }}> inscrever-se</button>
    </div>
    </div>
    </div>
  )

  
}