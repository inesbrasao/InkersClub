import Logo from "@/app/componentes/Logo";
import ProfileControl from "@/app/componentes/ProfileControl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '@/styles/form.module.css'

export default function FormIdProfile() {
    const router = useRouter()
    const [idState, setIdState] = useState(router.asPath.split("/")[3])
    const [artistState, setArtistState] = useState()

    useEffect(() => {
        if(router.isReady){

        const optionsArtist = {
             method: 'POST',
             headers: {'Content-Type': "application/json"},
             body: JSON.stringify({
               "collection": "artists",
               "id":idState
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
    }
  
    }, [router.isReady])
  



    return ( artistState && <div className={styles.idControlContainer}>
          
          <div>
             <Logo />
          </div>
          <div>
             <ProfileControl artist={artistState}/>
          </div>
          </div>
    )
  }