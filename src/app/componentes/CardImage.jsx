import Image from 'next/image'
import styles from '@/styles/cardImage.module.css'
import Tag from './Tag'

export default function CardImage({ artist, image, page }) {
    //recebe uma imagem e uma (ou duas) tags

    const pathImage = image.path
    const tags = image.tag
    const artistName = image.artist_id   

    console.log(pathImage.split("/"))
    //retorna uma div  com uma imagem e um paragrafo

    return <>
    
    <div className={page === "home" ? styles.cardImage : styles.cardImage2}>
    <div className={styles.image}
       style={{backgroundImage: `url(/api/loadimages/${pathImage.split("/")[2]})`,  backgroundPosition: "center center",  width: "170px", height: "170px"}}
       alt={artistName}
    />
    
    {tags.map(e=><div className={page === "home" ? styles.tags : styles.tags2}>{e}</div>)}
   
    </div>
    </>

}


/*
[XX]CARD IMAGE

[XX]CRIAR CONTA

[XX]LISTA DE CARDS

[XX]LOGIN 

[X]EDITAR/CRIAR PERFIL

[X]PERFIL (P.O.V. USER/ARTIST)

[X]SELECT TAGS

[x]CARREGAR IMAGEM

[ ]BARRA DE PESQUISA/ BOTÃO DE PESQUISA

[X]PESQUISA COMPLETA 

[X]TAGS MAIS POPULARES?

[XX]SHOWIMAGE

*/











