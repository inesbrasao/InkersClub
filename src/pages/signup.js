import InputText from "@/app/componentes/InputText";
import { useRouter } from "next/router";
import styles from '@/styles/signup.module.css'
import styles2 from '@/styles/profileControl.module.css'
import React, { useState } from 'react';
import Logo from "@/app/componentes/Logo";
import Head from 'next/head'

// Page to signup.
export default function SignUp() {
  const [formData, setFormData] = useState()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState()



  const options = {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(formData)
  }

  async function signup() {
    const res = await fetch('/api/signup', options)

    if (res.status === 200) {
      const body = await res.json();

      router.push(`/myprofile/form/${body._id}`)

    } else if (res.status === 409) {
      const error = await res.json()
      setErrorMessage(error.message)

    } else if (res.status === 409) {
      const error = await res.json()
      setErrorMessage(error.message)


    }

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (<div className={styles.signupContainer}>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
    <div className={styles.backButtonContainer}>
      <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
    </div>
    <div>
      <Logo />
    </div>
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Criar Conta</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputText name="email" label="Email*" onChange={handleChange} />
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Senha*</label>
          <input className={styles2.inputText} type="password" name="password" label="Senha" onChange={handleChange} />
        </div>
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Confirmar Senha*</label>
          <input className={styles2.inputText} type="password" name="passwordConfirmation" label="Confirmar Senha" onChange={handleChange} />
        </div>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        <button className={styles.button} type="submit" >Continuar</button>
      </form>
    </div></div>
  )
}