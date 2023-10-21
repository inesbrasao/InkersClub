import CardImage from "./CardImage"
import styles from '@/styles/styles.module.css'
import { useState, useEffect } from "react"
import ShowImage from "./ShowImage"
import { useRouter } from "next/router"
import InputSearch from "./InputSearch"


export default function ListCard() {
    const [search, setSearch] = useState(false)
    const [params, setParams] = useState()
    const [imageList, setImageList] = useState()
    const [showImage, setShowImage] = useState()

    const router = useRouter()
    let query = "?" + router.asPath.split('?')[1]
    for (let key in query){
        query[key].replaceAll("+", " ")
    }

    //recebe uma  lista de objetos  e faz um map dos objetos

    // cada objeto será um componente CardImage(com as props: imagem, IdArtist e tags)

    //retorna uma lista de Cards

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(params)
        }
        //console.log(showImage.id)

        async function fetchData() {

        
           const res = await fetch(`/api/search/${query}`, options);
           if (res.status === 200) {
              const body = await res.json();
              console.log("listcard", body)
              setImageList(body)
           }

        }
        fetchData();


    }, [])

    const changeParams = (data) => {
        setParams(data)

    }
    console.log(params)


    return <div className={styles.background}>
        {search ? <InputSearch changeParams={changeParams}/> : 
        <button className={styles.searchButton} onClick={() => setSearch(true)}>Pesquisar</button>}
        <div className={styles.listCard}>
            {showImage ? <div onClick={() => setShowImage()}>
                {router.push(`/photo/${imageList.id}`)}</div> :
                imageList && <div>
                {imageList.map(e => <div onClick={() => {router.push(`/photo/${e._id}`)}}>
                    <CardImage image={e} /> </div>)}
                </div>
            }

        </div>
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

