import ProfileControl from "@/app/componentes/ProfileControl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '@/styles/form.module.css'

// Page to update the artist profile
export default function FormIdProfile() {
  const router = useRouter()
  const [idState, setIdState] = useState(router.asPath.split("/")[3])
  const [artistState, setArtistState] = useState()

  useEffect(() => {
    if (router.isReady) {

      const optionsArtist = {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          "collection": "artists",
          "id": idState
        })
      }

      async function fetchArtist() {

        const res = await fetch(`/api/fetchById`, optionsArtist);

        if (res.status === 200) {
          const body = await res.json();
          setArtistState(body)
        }
      }
      fetchArtist();
    }

  }, [router.isReady])




  return (artistState && <div className={styles.idControlContainer}>
   <div>
      <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
    </div>
   
    <div>
      <ProfileControl artist={artistState} />
    </div>
  </div>
  )
}