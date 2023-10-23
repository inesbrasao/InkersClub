import InputText from "@/app/componentes/InputText";
import { Router } from "next/router";

import React, { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState()
    const [artistId, setArtistId] = useState()

    const options = {
      method: 'POST',
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify({"collection": "artists",
                          "id": idState})
  }

    async function signup() {
        const res = await fetch('/api/signup', options)

        if (res.status === 200) {
            const body = await res.json();
            console.log("listcard", body)
            
         }
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    
        
        const { email, password, passwordConfirm } = formData;
        signup(formData)
        
       
    
      };
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value,name)
        setFormData({
          ...formData,
          [name]: value,
        });
      };



    return (
          <div>
          <h1>Criar Conta</h1>
          <form>
          <InputText name="Email" label="Email" onChange={handleChange}/>
          <InputText name="password" label="Senha" onChange={handleChange}/>
          <InputText name="passwordConfirm" label="Confirmar Senha" onChange={handleChange}/>

          <button type="submit" onSubmit={handleSubmit}>Continuar</button>
          </form>
          </div>
    )
  }