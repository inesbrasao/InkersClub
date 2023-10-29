import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/profile.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";
import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";
import NavBar from "@/app/componentes/NavBar";


export default function ArtistsImages() {

  const router = useRouter()
  const id = router.query.idProfile

  const [artistImages, setArtistImages] = useState()
  const [imagesFeed, setImagesFeed] = useState()

  useEffect(() => {

    if (router.isReady) {
      console.log("id:", id)
      const optionsImage = {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          "id": id
        })
      }

      async function fetchImages() {

        const res = await fetch(`/api/fetchImagesByArtistId`, optionsImage);

        console.log(res.status)
        if (res.status === 200) {
          const body = await res.json();
          setArtistImages(body)
        }

      }
      fetchImages()
    }



  }, [router.isReady])

  useEffect(() => {
    
    if (artistImages !== undefined) {
       setImagesFeed( artistImages.reverse())
       console.log(imagesFeed)
       console.log(artistImages)
      
      
    }
  }, [artistImages])



  return <div className={styles.myProfileContainer}>
    
    <div className={styles.headerContainer}>
      {<ProfileHeader id={id} />}
    </div>
    {artistImages && imagesFeed && <div className={styles.cardBackground}>
      {imagesFeed.map(e => <div onClick={() => router.push(`/photo/${e._id}`)}><CardImage image={e} page={"profile"} /></div>)}

    </div>
    }
    <NavBar />
  </div>


}