import InputText from "@/app/componentes/InputText";
import { useRouter } from "next/router";
import styles from '@/styles/signup.module.css'
import styles2 from '@/styles/profileControl.module.css'

import React, { useState } from 'react';
import Logo from "@/app/componentes/Logo";

export default function SignUp() {
  const [formData, setFormData] = useState()
  // const [artistId, setArtistId] = useState()
  const router = useRouter()

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
      
    } else if( res.status === 409){
      const error = await res.json()
      setErrorMessage(error.message)
     
    } else if( res.status === 409){
      const error = await res.json()
      setErrorMessage(error.message)
     

    }

  }


  const handleSubmit = (event) => {
    event.preventDefault();

    signup(formData)
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



  return (<div className={styles.signupContainer}>
    <div>
      <Logo/>
    </div>
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Criar Conta</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputText name="email" label="Email" onChange={handleChange} />
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Senha</label>
          <input className={styles2.inputText} type="password" name="password" label="Senha" onChange={handleChange} />
        </div>
        <div className={styles2.containerInputText}>
          <label className={styles2.labelInputText}>Confirmar Senha</label>
          <input className={styles2.inputText} type="password" name="passwordConfirmation" label="Confirmar Senha" onChange={handleChange} />
        </div>
        {/* {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null} */}
        <button className={styles.button} type="submit" >Continuar</button>
      </form>
    </div></div>
  )
}