import Tags from "@/app/componentes/Tags";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/styles.module.css'
import Button from "@/app/componentes/Button";


export default function ShowImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[2]

  const [idState, setIdState] = useState(router.asPath.split("/")[2])
  const [imageState, setImageState] = useState()
  const [artistState, setArtistState] = useState()

  useEffect(() => {
    const optionsImage = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        "collection": "images",
        "id": id
      })
    }
    const optionsArtist = {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({
        "collection": "artists",
        "id": "6531323d939a1134f4807188"
      })
    }

    async function fetchImage() {
      console.log(imageState, "tst")

      const res = await fetch(`/api/fetchById`, optionsImage);

      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setImageState(body)

      }
      if (imageState !== undefined) {
        console.log(idState, imageState, "teste11")
        await fetchArtist()
      }

    }
    async function fetchArtist() {
      console.log(idState.artist_id, "teste2")

      const res = await fetch(`/api/fetchById`, optionsArtist);

      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setArtistState(body)

      }
    }
  }, [])

  // const pathImage = imageState.path
  // const tags = imageState.tag
  // const artistName = imageState  //artist.name

  return <> {imageState &&
    <div className={styles.ShowImage}>
      <button onClick={() => router.push(`/home`)}><img src="\icons\radix-icons_cross-1.svg"/></button>
      <div>
        {console.log(imageState)}
        {console.log(artistState)}

        <img src={imageState.path} alt="Girl in a jacket" ></img>
        <div>
          <div>
            {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
          </div>
          <div>
            <p>{artistState}</p> 
            <Button name="Ver perfil" />
          </div>
        </div>
      </div>
    </div>}
  </>





}