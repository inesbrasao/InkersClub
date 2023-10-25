import { useRouter } from "next/router";
import Button from "./Button";
import InputText from "./InputText";
import React, { useEffect, useState } from 'react';
import styles from '@/styles/profileControl.module.css'
import Popup from "./Popup";


export default function ProfileControl({ artist }) {
  const router = useRouter()
  const [formData, setFormData] = useState(artist)
  const [cities, setCities] = useState()

  const [popup,setPopup] = useState(false)


  useEffect(() => {
    fetch('/cities.json')
       .then(response => response.json())
       .then(cities => {
          setCities(cities);

       })
 }, []);

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


  return <div>{formData && cities &&<div className={styles.ProfileControlContainer}>

    <form  className={styles.form} onSubmit={handleSubmit} id="profileControl">

      <InputText name="name" label="Nome" value={formData.name} onChange={handleChange} />
      <InputText name="phone" label="Telemóvel" value={formData.phone} onChange={handleChange} />
      <InputText name="shop" label="Estúdio" value={formData.shop} onChange={handleChange} />
      {/* <InputText name="city" label="Localidade" value={formData.city} onChange={handleChange} /> */}
      <div className={styles.containerInputText} >
        <label htmlFor="city" className={styles.labelSelect}>Localidade</label> 
        <select className={styles.select} name="city" onChange={handleChange}>
            {cities.localidade.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
        </select>
      </div>
      <InputText name="instagram" label="Instagram" value={formData.instagram} onChange={handleChange} />

      <button className={styles.button} type="submit" >Alterar</button>
      <button className={styles.button} onClick={handleDelete} type="submit" >Eliminar</button>
      {popup? <Popup artist={artist}/> : null}
      {/* <button className={styles.button} type="submit" >{formData.city!= null? "Alterar" : "Adicionar"}</button> */}
     

    </form>

  </div>}</div>

}
