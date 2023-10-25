import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../../styles/photo.module.css"


export default function ProfilePath({ artistId }) {

  const [artistState, setArtistState] = useState()


  useEffect(() => {

    const optionsArtist = {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        "collection": "artists",
        "id": artistId
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
    <div className={styles.profilePath}>
      <p className={styles.artistName}>{artistState.name}</p>
      <Button name="Ver perfil" id={artistState._id} />
    </div>


  }</>
}