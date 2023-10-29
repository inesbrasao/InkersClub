import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '@/styles/myprofile.module.css'

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

                console.log(router.asPath.split("/")[3])
                console.log(res.status)
                if (res.status === 200) {
                    const body = await res.json();
                    setArtistImages(body)
                    console.log(artistImages)
                    console.log(id)
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
    


    return <div>  {artistImages && 
    <div className={styles.myProfileContainer}>
        <div className={styles.headerContainer}>
            <ProfileHeader id={id} />
            <button className={`${styles.editbutton} ${styles.button}`}onClick={() => { router.push(`/myprofile/form/${id}`) }}><img src="/icons/edit_profile.svg" /></button>
            <button className={`${styles.addbutton} ${styles.button}`} onClick={() => { router.push(`/myprofile/addimage/${id}`) }}><img src="/icons/add_photo.svg" /></button>
        </div>
        <div className={styles.cardBackground}>
            {artistImages && imagesFeed && artistImages.length > 0
                ? imagesFeed.map(e => <div key={e.id} onClick={() => router.push(`/myprofile/photo/${e._id}`)}><CardImage image={e} /></div>)
                : <div className={styles.cta}>Ainda não tens nenhuma imagem, adicione agora!</div>
            }
        </div>
    </div>
    }
    </div>


}