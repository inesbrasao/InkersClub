import CardImage from "./CardImage"
import styles from '@/styles/homepage.module.css'
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

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(params)
        }

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


    return <div >
        {search ? <InputSearch changeParams={changeParams}/> : 
        <button className={styles.searchButton} onClick={() => setSearch(true)}>Pesquisar</button>}
        <div>
            {showImage ? <div onClick={() => setShowImage()}>
                {router.push(`/photo/${imageList.id}`)}</div> :
                imageList && <div className={styles.listCard}>
                {imageList.map(e => <div onClick={() => {router.push(`/photo/${e._id}`)}}>
                    <CardImage image={e} /> </div>)}
                </div>
            }

        </div>
    </div>
}