import { useEffect, useState } from "react";
import Button from "./Button";
import Tags from "./Tags";
import Image from "next/image";


export default function ShowImage() {
   const [state, setState] = useState()
   //recebe: 
   // uma imagem/url
   // as tags
   // o artista

   useEffect( () => {
      async function fetchData() {
         const res = await fetch(`/api/search`);

         console.log(res.status)
         if (res.status === 200) {
            const body = await res.json();
            setState(body)
            //   console.log(state)
         }
      }
       fetchData();

      console.log(state)

   }, [])




   //retorna 

   return <div>
      {state && <div>
         <Image
            src="/6531323d939a1134f480717e/image1.png"
            width={500}
            height={500}
            alt={state[0].artists_id}
         />

         <div>
            {/* <div>
               {state[0].tag.map(e => <Tags tagName={e} />)}
            </div> */}
            <div>
               <p>{state[0].artists_id}</p>
               {/* <Button name="Ver perfil" /> */}
            </div>

         </div>
      </div>
      }
   </div>





}