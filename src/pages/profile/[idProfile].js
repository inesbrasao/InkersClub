import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/profile.module.css'
import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";
import NavBar from "@/app/componentes/NavBar";
import Head from "next/head";

// Page that shows the user the chosen artist profile
export default function ArtistsImages() {

  const router = useRouter()
  const id = router.query.idProfile

  const [artistImages, setArtistImages] = useState()
  const [imagesFeed, setImagesFeed] = useState()

  useEffect(() => {

    if (router.isReady) {
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
    }
  }, [artistImages])



  return <div className={styles.myProfileContainer}>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
    
    <div className={styles.headerContainer}>
      {<ProfileHeader id={id} />}
    </div>
    {artistImages && imagesFeed && <div className={styles.cardBackground}>
      {imagesFeed.map(e => <div key={e._id} onClick={() => router.push(`/photo/${e._id}`)}><CardImage image={e} page={"profile"} /></div>)}
    </div>
    }
    <div className={styles.navBar}>
    <NavBar />
    </div>
  </div>


}