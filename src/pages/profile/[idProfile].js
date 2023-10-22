import Tags from "@/app/componentes/Tags";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/photo.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";
import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";


export default function ArtistsImages() {

  const router = useRouter()
  const id = router.asPath.split("/")[2]

  const [artistImages, setArtistImages] = useState()

  useEffect(() => {

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
  
    }, [])


    return <div>
        {<ProfileHeader id={id} />}
        {artistImages && <div>
            {artistImages.map(e => <div><CardImage image={e} /></div>)}
        </div>
}
    </div>


}