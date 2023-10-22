import Tags from "@/app/componentes/Tags";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/photo.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";


export default function ShowImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[2]
  let  userId  = useParams();

  const [idState, setIdState] = useState(router.asPath.split("/")[2])
  const [imageState, setImageState] = useState()
  //const [artistState, setArtistState] = useState()

    useEffect(() => {
    
    const optionsImage = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        "collection": "images",
        "id": idState
      })
    }
    // const optionsArtist = {
    //   method: 'POST',
    //   headers: {'Content-Type': "application/json"},
    //   body: JSON.stringify({
    //     "collection": "artists",
    //     "id": "65325d5990af02c609610323" //NÃO ESQUECER DE MUDAR
    //   })
    // }

    async function fetchImage() {

      const res = await fetch(`/api/fetchById`, optionsImage);

      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setImageState(body)
        
      

      }
     
    }
    fetchImage()

  }, [])


  return <> {imageState &&
    <div className={styles.showImage}>
      <button onClick={() => router.push(`/home`)}><img src="\icons\radix-icons_cross-1.svg"/></button> 
      <div>
        <img src={imageState.path} alt="Girl in a jacket" ></img>
        <div className={styles.photoInfo}>
          <div>
            {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
          </div>
          <div>
            <ProfilePath artistId={imageState.artist_id}/>
          </div>
          {/* <div>
            <p>{artistState.name}</p> 
            <Button name="Ver perfil" />
          </div> */}
        </div>
      </div>
    </div>}
  </>





}