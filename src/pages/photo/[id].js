import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from '@/styles/photo.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";


export default function ShowImage() {
  const router = useRouter()
  // const id = router.asPath.split("/")[2]
  // let userId = useParams();

  // const [idState, setIdState] = useState(router.asPath.split("/")[2] )
  const [imageState, setImageState] = useState()
  const [suggestedImages, setSuggestedImages] = useState()
  //const [artistState, setArtistState] = useState()

  useEffect(() => {
    if(router.isReady){
      async function heyholetsgo() {
        async function fetchImage() {
    
          const optionsImage = {
            method: 'POST',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
              "collection": "images",
              "id": router.asPath.split("/")[2] 
            })
          }
          
          const res = await fetch(`/api/fetchById`, optionsImage);
    
          // console.log(res.status)
          if (res.status === 200) {
            const body = await res.json();
            setImageState(body)

            return body
          }
    
        }
    
    
        const body = await fetchImage()
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            "tag": body.tag[0]
          })
        }
        
        async function getSuggestedImages() {
      
          const result = await fetch(`/api/getSuggestedImages`, options);
      
          if (result.status === 200) {
            const images = await result.json();
            setSuggestedImages(images)
          }
        }
    
        getSuggestedImages()
    
       }

    
        heyholetsgo()
      
    }
  }, [router.isReady])




  return <div className={styles.showImageContainer}> {imageState &&
    <div className={styles.showImage}>
      <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
      <div className={styles.photoContainer}>
        <div className={styles.photo} style={{backgroundImage: `url(/api/loadimages/${imageState.path.split("/")[2]})`, backgroundSize: 'cover', width: "293px", height: "293px"}} alt="Girl in a jacket" >
        </div>
        <div className={styles.photoInfo}>
          <div className={styles.tags}>
            {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
          </div>
          <div >
            <ProfilePath artistId={imageState.artist_id} />
          </div>
          
        </div>
        <div className={styles.suggestedPhotos}>
            {suggestedImages && suggestedImages.map(e => e.path === imageState.path ? null :<div><div className={styles.suggestedPhoto} style={{backgroundImage: `url(/api/loadimages/${e.path.split("/")[2]})`, backgroundSize: 'cover', width: "100px", height: "100px"}} alt="Girl in a jacket" ></div></div> )}
          </div>
      </div>
    </div>}
  </div>


}

