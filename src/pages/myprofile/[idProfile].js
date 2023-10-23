import ProfileHeader from "@/app/componentes/ProfileHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function MyProfile() {

    const router = useRouter()
    const id = router.asPath.split("/")[3]

    const [artistImages, setArtistImages] = useState()

    useEffect(() => {
if(router.isReady){
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
                console.log(artistImages)
                console.log(id)
            }

        }
        fetchImages()

    }}, [router.isReady])


    return <div> {id && <div><div>
        <ProfileHeader id={id} /></div>
        <div>
            {artistImages.map(e => <div><CardImage image={e} /></div>)}
        </div>
    </div>
    }
    </div>


}