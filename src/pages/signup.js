import InputText from "@/app/componentes/InputText";
import { Router, useRouter } from "next/router";

import React, { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState()
  const [artistId, setArtistId] = useState()
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



  return (
    <div>
      <h1>Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <InputText name="email" label="Email" onChange={handleChange} />
        <InputText name="password" label="Senha" onChange={handleChange} />
        <InputText name="passwordConfirmation" label="Confirmar Senha" onChange={handleChange} />

        <button type="submit" >Continuar</button>
      </form>
    </div>
  )
}