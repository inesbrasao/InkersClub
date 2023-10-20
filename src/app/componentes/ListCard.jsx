import CardImage from "./CardImage"
import styles from '@/styles/styles.module.css'
import { useState, useEffect } from "react"
import ShowImage from "./ShowImage"
import { useRouter } from "next/router"


export default function ListCard({ paramsPesquisa }) {
    const [imageList, setImageList] = useState()
    const [showImage, setShowImage] = useState()

    const router = useRouter()
    //recebe uma  lista de objetos  e faz um map dos objetos

    // cada objeto será um componente CardImage(com as props: imagem, IdArtist e tags)

    //retorna uma lista de Cards

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                //"city": paramsPesquisa.city
                "collection": "images"
            })
        }
        //console.log(showImage.id)

        async function fetchData() {

        
           const res = await fetch(`/api/search/`, options);
  
           console.log(res.status)
           if (res.status === 200) {
              const body = await res.json();
              setImageList(body)

           }

        }
        fetchData();


    }, [])


    return <div className={styles.listCard}>
        <button>Pesquisar</button>
        {showImage ? <div onClick={() => setShowImage()}> {router.push(`/photo/${imageList.id}`)}</div> :
            imageList && <div>
                {/* {imageList.map(e => <div onClick={() => setShowImage(e)}><CardImage image={e} /> </div> */}
                {imageList.map(e => <div onClick={() => {router.push(`/photo/${e._id}`)}}><CardImage image={e} /> </div>
                )}
            </div>
        }

    </div>
}


// return <div className={styles.listCard}>
//     <button>Pesquisar</button>
//     {showImage ? <div onClick={() => setShowImage()}> <ShowImage image = {showImage} /></div> :
//     imageList && <div>
//         {imageList.map(e => <div onClick={() => setShowImage(e)}><CardImage image={e}/> </div>
//     )}
//     </div>
//     }}

{/*{arrInfos.map(e => <CardImage key={e.idArtist} props={e}/>)}*/ }

