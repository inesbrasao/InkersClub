import CardImage from "./CardImage"
import styles from '@/styles/homepage.module.css'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputSearch from "./InputSearch"
import TagSuggest from "./TagSuggest"

// Params {
// }
// ListCard Component - /home. 
// Shows the search form and lists the cardImage's resulting from the search or a sample of 10 random results.
export default function ListCard() {
    const [search, setSearch] = useState(false)
    const [params, setParams] = useState()
    const [imageList, setImageList] = useState()
    const [showImage, setShowImage] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const router = useRouter()

    //when the search params comes from query (e.g. by clicking in the artist tags)
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
              setImageList()
              setErrorMessage("Pesquisa sem resultados")
           }

        }
        fetchData();


    }, [params])

    const changeParams = (data) => {
        setParams(data)
        setSearch(false)
    }


    return <div className={styles.listCardContainer}>
        <InputSearch changeParams={changeParams} search={search}/>

        <div className={styles.searchContainer} >
            {
                search === false && <><button className={styles.searchButton} onClick={() => setSearch(true)}>Pesquisar</button> 
                <div className={styles.suggestedTags}><TagSuggest changeParams={changeParams} /></div>  </>
            }
            
        </div>
        
        <div style={{ transform: search === true ? "translateY(160px)" : "translateY(0px)", left: "0px",
            transition: "transform 0.5s cubic-bezier(0.75, 0.25, 0.25, 0.75)"}}>
            
            {showImage ? <div onClick={() => setShowImage()}>
                {router.push(`/photo/${imageList.id}`)}</div> :
                imageList && <div className={styles.listCard}>
                {imageList.map(e => <div key={e._id} onClick={() => {router.push(`/photo/${e._id}`)}}>
                    <CardImage image={e} page={"home"} className={styles.cardImageContainer}/> </div>)}
                </div>
            }
            {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
        </div>
    </div>
}