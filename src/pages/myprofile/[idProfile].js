import CardImage from "@/app/componentes/CardImage";
import ProfileHeader from "@/app/componentes/ProfileHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function MyProfile() {

    const router = useRouter()
    const id = router.asPath.split("/")[2]

    const [artistImages, setArtistImages] = useState()

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


    return <div> {artistImages && <div>
        <div>
            <ProfileHeader id={id} />
            <button onClick={() => { router.push(`/myprofile/form/${id}`) }}><img src="/icons/edit_profile.svg" /></button>
        </div>
        <div>
            <button onClick={() => { router.push(`/myprofile/addimage/${id}`) }}><img src="/icons/add_photo.svg" /></button>
        </div>
        <div>
            {artistImages && artistImages.length > 0
                ? artistImages.map(e => <div key={e.id}><CardImage image={e} /></div>)
                : <div>Ainda não tens nenhuma imagem, adicione agora!</div>
            }
        </div>
    </div>
    }
    </div>


}