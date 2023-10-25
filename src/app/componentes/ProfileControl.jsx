import { useRouter } from "next/router";
import Button from "./Button";
import InputText from "./InputText";
import React, { useState } from 'react';
import styles from '@/styles/profileControl.module.css'


export default function ProfileControl({ artist }) {
  const router = useRouter()
  const [formData, setFormData] = useState(artist)


  const optionsArtist = {
    method: 'POST',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(
      formData)
  }

  async function updateProfile() {

    const res = await fetch(`/api/profile`, optionsArtist);

    console.log(res.status)
    if (res.status === 200) {
 
    }
  }



  const handleSubmit = (event) => {

   event.preventDefault()
    updateProfile()
    router.push(`/myprofile/${formData._id}`)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, name)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return <div>{formData && <div className={styles.ProfileControlContainer}>
    <form  className={styles.form} onSubmit={handleSubmit} id="profileControl">

      <InputText name="name" label="Nome" value={formData.name} onChange={handleChange} />
      <InputText name="phone" label="Telemóvel" value={formData.phone} onChange={handleChange} />
      <InputText name="shop" label="Estúdio" value={formData.shop} onChange={handleChange} />
      <InputText name="city" label="Localidade" value={formData.city} onChange={handleChange} />
      <InputText name="instagram" label="Instagram" value={formData.instagram} onChange={handleChange} />

      <button className={styles.button} type="submit" >Alterar</button>
      {/* <button className={styles.button} type="submit" >{formData.city!= null? "Alterar" : "Adicionar"}</button> */}
     

    </form>

  </div>}</div>

}
