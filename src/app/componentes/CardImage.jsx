import styles from '@/styles/cardImage.module.css'

// Params {
//     image: object,
//     page: string
// }
// CardImage Component - shows image and correspondent tags
export default function CardImage({ image, page }) {

    
    const pathImage = image.path
    const tags = image.tag
    const artistName = image.artist_id
    



    return (
    <>
    
        <div className={page === "home" ? styles.cardImage : styles.cardImage2}>
            <div className={styles.image}
       style={{backgroundImage: `url(/api/loadimages/${pathImage.split("/")[2]})`,  backgroundPosition: "center center",  width: "160px", height: "160px"}}
       alt={artistName}
            />
    
            {tags?.map(e=><div key={e} className={page === "home" ? styles.tags : styles.tags2}>{e}</div>)}
   
        </div>
    </>

    )
}











