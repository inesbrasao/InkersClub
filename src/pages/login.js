import { useRouter } from "next/router";
import { useState } from "react";
import styles from '@/styles/login.module.css'
import Logo from "@/app/componentes/Logo";
import styles2 from '@/styles/profileControl.module.css'
import Head from 'next/head'

// Page to Login.
export default function Login() {
  const [formData, setFormData] = useState()
  const [errorMessage, setErrorMessage] = useState()

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
    } else if( res.status === 404){
      const error = await res.json()
      setErrorMessage(error.message)
     

    }else if( res.status === 401){
      const error = await res.json()
      setErrorMessage(error.message)

  }

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (<div >
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
    <div className={styles.backButtonContainer}>
    <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
    </div>
    <div className={styles.loginContainer}>
    <div>
      <Logo />
      
    </div>
    
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Email</label>
          <input className={styles2.inputText} type="text" name="email" label="Email" onChange={handleChange} />
        </div>
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Senha</label>
          <input className={styles2.inputText} type="password" name="password" label="Senha" onChange={handleChange} />
        </div>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
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