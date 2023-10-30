import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/photo.module.css'
import Popup from "@/app/componentes/Popup";
import Head from "next/head";

// Page that shows the artist one of his own photos zoomed, where he can delete it. 
export default function ShowImage() {
  const router = useRouter()

  const [imageState, setImageState] = useState()
  const [popup,setPopup] = useState(false)

  useEffect(() => {

    const optionsImage = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        "collection": "images",
        "id": router.asPath.split("/")[3]
      })
    }
    

    async function fetchImage() {

      const res = await fetch(`/api/fetchById`, optionsImage);
      if (res.status === 200) {
        const body = await res.json();
        setImageState(body)



      }

    }
    fetchImage()

  }, [])

  const changeState = (value) => {
    setPopup(value)
  }

  


  return <>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
    <div className={styles.showImageContainer}> {imageState &&
    <div className={styles.showImage}>
      <div className={styles.control}>
      <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
      <button onClick={()=> setPopup(true)} className={styles.deleteButton}><img src="\icons\delete.svg" /></button>
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.photo} style={{background: `url(/api/loadimages/${imageState.path.split("/")[2]})`, backgroundSize: 'cover', width: "90vw", height: "90vw"}} alt="Girl in a jacket" >
        </div>
        <div className={styles.photoInfo}>
          <div className={styles.tags}>
            {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
          </div>
         
        </div>
      </div>
    </div>}
          {popup ? <Popup className={styles.popup} data={imageState} collection={"images"} changeState={changeState} /> : null}
  </div>
  </>





}