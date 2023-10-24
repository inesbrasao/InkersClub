import { useState, useEffect } from "react";
import styles from '@/styles/ProfileHearder.module.css'
import Tag from "./Tag";
import { useRouter } from "next/router";


export default function ProfileHeader({id}) {
   
   const [artist, setArtist] = useState()
   const router = useRouter()
   


   useEffect(() => {

      if(router.isReady){
               const options = {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            "id": id,
            "collection": "artists"
          })
        }
  
      async function fetchArtist() {
  
      const res = await fetch(`/api/fetchById`, options);
  
      if (res.status === 200) {
          const body = await res.json();
          setArtist(body)
      }
      
      }
      fetchArtist()
      }


    
      }, [router.isReady])



   //recebe informações do artista

   return (
      //retorna 
      //<div>
      //imagem circular, 
      // h1 com ArtistName
      //paragrafo com estudio(se houver)
      //paragrafo localidade
      //</div>
      <div>
      {artist && <div className={styles.ProfileHeader}>
         <div className={styles.idContainer}>
            
            <img className={styles.idImage} src="/6531323d939a1134f480717f/pp.jpg" alt="aquarela" />
         <div className={styles.idData}>
            <h1>{artist.name}</h1>
            <p>{artist.shop}</p>
            <p>{artist.city}</p>
         </div>
         </div>

         <div className={styles.tagsContainer}>
            
         {artist.category && artist.category.map(e => <Tag tagName={e} />)}

            {/* <p>neo tradicional</p>
            <p>aquarela</p> */}
         </div>

         <div className={styles.contactContainer}>
            <a href="mailto:">{artist.email}</a>
            <p>{artist.instagram}</p>
         </div>

         {/* <button onClick={() => {
            //  alert('clicked');
         }}>editar </button>


         <button onClick={() => {

         }}>
            adicionar foto</button> */}
      </div>}
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