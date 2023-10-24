import CardImage from "./CardImage"
import styles from '@/styles/homepage.module.css'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputSearch from "./InputSearch"
import TagSuggest from "./TagSuggest"


export default function ListCard() {
    const [search, setSearch] = useState(false)
    const [params, setParams] = useState()
    const [imageList, setImageList] = useState()
    const [showImage, setShowImage] = useState()
    const [errorMessage, setErrorMessage] = useState()

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
              setImageList(body)
              setErrorMessage()
           } else if(res.status === 204){
                setErrorMessage("Pesquisa sem Resultados")
           }

        }
        fetchData();


    }, [params])

    const changeParams = (data) => {
        setParams(data)
    }


    return <div >
        {search ? <InputSearch changeParams={changeParams}/> : 
        <div><button className={styles.searchButton} onClick={() => setSearch(true)}>Pesquisar</button> <TagSuggest changeParams={changeParams} /> </div>}
        <div>
            {showImage ? <div onClick={() => setShowImage()}>
                {router.push(`/photo/${imageList.id}`)}</div> :
                imageList && <div className={styles.listCard}>
                {imageList.map(e => <div onClick={() => {router.push(`/photo/${e._id}`)}}>
                    <CardImage image={e} page={"home"} /> </div>)}
                </div>
            }
            {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
        </div>
    </div>
}