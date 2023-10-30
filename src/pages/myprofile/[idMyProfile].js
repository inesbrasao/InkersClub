import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '@/styles/myprofile.module.css'
import NavBar from "@/app/componentes/NavBar";
import Head from "next/head";

// Page that shows the artist his own profile.
export default function MyProfile() {

    const router = useRouter()
    const id = router.asPath.split("/")[2]

    const [artistImages, setArtistImages] = useState()
    const [imagesFeed, setImagesFeed] = useState()

    useEffect(() => {
        if (router.isReady) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    "id": id
                })
            }

            async function fetchImages() {

                const res = await fetch(`/api/fetchImagesByArtistId`, options);

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
    


    return <div>
        <Head>
            <title>InkersClub</title>
            <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
        </Head>
        {artistImages && 
    <div className={styles.myProfileContainer}>
        <div className={styles.headerContainer}>
            <ProfileHeader id={id} />
            <button className={`${styles.editbutton} ${styles.button}`}onClick={() => { router.push(`/myprofile/form/${id}`) }}><img src="/icons/edit_profile.svg" /></button>
            <button className={`${styles.addbutton} ${styles.button}`} onClick={() => { router.push(`/myprofile/addimage/${id}`) }}><img src="\icons\add_photo.svg" /></button>
        </div>
        <div className={styles.cardBackground}>
            {artistImages && imagesFeed && artistImages.length > 0
                ? imagesFeed.map(e => <div key={e.id} onClick={() => router.push(`/myprofile/photo/${e._id}`)}><CardImage image={e} /></div>)
                : <div className={styles.cta}>Ainda não tem nenhuma imagem, adicione agora!</div>
            }
        </div>
        <NavBar />
    </div>
    
    }
    </div>


}