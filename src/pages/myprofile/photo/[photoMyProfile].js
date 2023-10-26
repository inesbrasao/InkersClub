import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/photo.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";


export default function ShowImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[2]
  let userId = useParams();

  const [idState, setIdState] = useState(router.asPath.split("/")[3])
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
    

    async function fetchImage() {

      const res = await fetch(`/api/fetchById`, optionsImage);
      console.log(idState,"olá1")
      console.log(res.status)
      if (res.status === 200) {
        const body = await res.json();
        setImageState(body)



      }

    }
    fetchImage()

  }, [])

  


  return <div className={styles.showImageContainer}> {imageState &&
    <div className={styles.showImage}>
      <div>
      <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.photo} style={{background: `url(/api/loadimages/${imageState.path.split("/")[2]})`, backgroundSize: 'cover', width: "293px", height: "293px"}} alt="Girl in a jacket" >
        </div>
        <div className={styles.photoInfo}>
          <div className={styles.tags}>
            {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
          </div>
          <div >
            <ProfilePath artistId={imageState.artist_id} />
          </div>
        </div>
      </div>
    </div>}
  </div>





}