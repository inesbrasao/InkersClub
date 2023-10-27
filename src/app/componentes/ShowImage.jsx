import { useEffect, useState } from "react";
import Button from "./Button";
import Tags from "./Tag";
import Image from "next/image";


export default function ShowImage({artist, image}) {
   //recebe: 
   // uma imagem/url
   // as tags
   // o artista
   const pathImage = image.path
   const tags = image.tag
   const artistName = image.artists_id   //artist.name

   




   //retorna 

   return <div>
   
      <div>
         <Image
            src={pathImage}
            width={500}
            height={500}
            alt={artistName}
         />

         <div>
            {/* <div>
               {state[0].tag.map(e => <Tags tagName={e} />)}
            </div> */}
            <div>
               <p>{artistName}</p>
               {/* <Button name="Ver perfil" /> */}
            </div>

         </div>
      </div>
   </div>





}