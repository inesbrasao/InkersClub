import Tags from "@/app/componentes/Tags";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/styles.module.css'


export default function ShowImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[2]

  const [idState, setIdState] = useState(router.asPath.split("/")[2])
  const [imageState, setImagemState] = useState()

  useEffect(() => {
    const optionsImage = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        //"city": paramsPesquisa.city
        "collection": "images",
        "id": id
      })
    }

    async function fetchImage() {
      console.log(idState)

      const res = await fetch(`/api/fetchById`, optionsImage);

      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setImagemState(body)

      }
    }
    async function fetchArtist() {
      console.log(idState)

      const res = await fetch(`/api/fetchById`, options);

      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setImagemState(body)

      }
    }
    fetchImage<();

  }, [])

  // const pathImage = imageState.path
  // const tags = imageState.tag
  // const artistName = imageState  //artist.name

  return <> {imageState &&
    <><button onClick={() => router.push()}>Voltar</button>
      <div>
        {console.log(imageState)}

        <img src={imageState.path} alt="Girl in a jacket" ></img>
        <div>
          <div>
            {imageState.tag.map(e => <Tags tagName={e} />)}
          </div>
          <div>
            {/* //<p>{artistName}</p> 
            <Button name="Ver perfil" />*/}
          </div>
        </div>
      </div>
    </>}
  </>





}