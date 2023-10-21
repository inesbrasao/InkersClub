import { useState,useEffect } from "react";
import Button from "./Button";


export default function ProfilePath({artistId}) {

   const [artistState, setArtistState] = useState()
  

   useEffect(() => {

      const optionsArtist = {
           method: 'POST',
           headers: {'Content-Type': "application/json"},
           body: JSON.stringify({
             "collection": "artists",
             "id":artistId
           })
         }



    async function fetchArtist() {

      const res = await fetch(`/api/fetchById`, optionsArtist);

      console.log(res.status, "ola2")
      if (res.status === 200) {
        const body = await res.json();
        setArtistState(body)
        console.log(artistState, 'ola1')
        
        
      }
    }
   fetchArtist();

  }, [])


   return <>{artistState &&
  <div>
             <p>{artistState.name}</p>  
            "palavra"
            <Button name="Ver perfil" />
          </div>
   
    
}</>}