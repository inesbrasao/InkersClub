import { useState } from "react";
import styles from '@/styles/ProfileHearder.module.css'
import Tags from "./Tags";

 const artistaTeste = {
      "name": "Carlos Pereira",
      "email": "carlos.pereira@gmail.com",
      "instagram": "@carlospereira",
      "city": "Faro",
      "shop": "Agulha Dourada",
      "phone": "+351933333333",
      "password": "SenhaCarlos",
      "category": ["single line", "preto e branco", "sem contorno"],
      
   }

export default function ProfileHeader(props) {
const [artista, setArtista] = useState(artistaTeste)

   //recebe informações do artista

   return (
      //retorna 
      //<div>
      //imagem circular, 
      // h1 com ArtistName
      //paragrafo com estudio(se houver)
      //paragrafo localidade
      //</div>

      <div className={styles.ProfileHeader}>
         <div className={styles.idContainer}>
            
            <img className={styles.idImage} src="/6531323d939a1134f480717f/image1.jpg" alt="aquarela" />
         <div className={styles.idData}>
            <h1>{artista.name}</h1>
            <p>{artista.shop}</p>
            <p>{artista.city}</p>
         </div>
         </div>

         <div className={styles.tagsContainer}>
            {artista.category.map(e => <Tags tagName={e} key={e} />)}

            {/* <p>neo tradicional</p>
            <p>aquarela</p> */}
         </div>

         <div className={styles.contactContainer}>
            <a href="mailto:">{artista.email}</a>
            <p>{artista.instagram}</p>
         </div>

         <button onClick={() => {
            //  alert('clicked');
         }}>editar </button>


         <button onClick={() => {

         }}>
            adicionar foto</button>
      </div>
   );



   //<div>
   // tags mais relevantes para este artista
   //</div>


   //<div>
   //link emailto email
   //paragrafo instagram
   //</div>


   //botão para editar perfil 


   //? como renderizar o botão de editar apenas para artista dono do perfil?)


   // botão para add foto

}