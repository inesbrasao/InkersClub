import Button from "./Button";
import InputText from "./InputText";
import React, { useState } from 'react';


export default function ProfileControl({props}) {
   //pode receber um idArtist 
   //ou email e senha para criar um novo Artista
   //Se props.idArtist existir faz um pedido de alteração do perfil
   //Se não, cria um novo Artista
   

   //retorna Componente UploadImage e
   //form com 5 InputText de texto (nome, tlm, estúdio, localidade, instagram)  e um botão {se o props.idArtist existe: "atualizar", se não "Criar Perfil"  }
   
   /*let profilebutton = false
   if(props.id){
      profilebutton = true
   }*/

   const artist ={
   "name": "Ana Carolina" ,
   "email": "anacarolina@gmail.com",
   "instagram":"@ana_carolina",
   "city": "Braga",
   "shop": "The Waveless Beach",
   "phone": "+351967454687", 
   "password": "Mor@ngito19",
   "category":["glitch", "tinta branca", "minimalista"]}

   const [formData, setFormData] = useState(artist)

    const handleSubmit = (event) => {
      event.preventDefault();
  
      
      const { name, phone, shop, city, instagram } = formData;
  
      console.log('Form data:', { name, phone, shop, city, instagram });
      console.log(event.target);
  
      // Reset the form after submission
      // setFormData({
      //    name: '',
      //    phone: '',
      //    shop: '',
      //    city: '',
      //    instagram:''
      // });
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(event.target.value,name)
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
   return <div>
      <form onSubmit={handleSubmit} id="profileControl">

      
      {/*<label htmlFor={formData.name}>{formData.name}</label> <br/>
       <input type="text" id={formData.name} value={formData.name}name={formData.name}   onChange={handleChange}/> */}

       <InputText name="name" label="Nome" value={formData.name} onChange={handleChange}/>
       <InputText name="phone" label="Telemóvel" value={formData.phone} onChange={handleChange}/>
       <InputText name="shop" label="Estúdio" value={formData.shop} onChange={handleChange}/>
       <InputText name="city"label="Localidade"  value={formData.city} onChange={handleChange}/>
       <InputText name="instagram" label="Instagram"  value={formData.instagram} onChange={handleChange}/>
      
      
    
      {/* <Button name="alterar"/>  */}
      <button type="submit">Submit</button>
      </form>

   </div>

   }
