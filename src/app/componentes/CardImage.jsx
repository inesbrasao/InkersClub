import Image from 'next/image'
import styles from '@/styles/homepage.module.css'

export default function CardImage({ artist, image }) {
    //recebe uma imagem e uma (ou duas) tags

    const pathImage = image.path
    const tags = image.tag
    const artistName = image.artist_id   

    console.log(image)

    //retorna uma div  com uma imagem e um paragrafo

    return <>
    
    <div className={styles.cardImage}>
    <Image className={styles.image}
       src={pathImage}
       width={180}
       height={180}
       alt={artistName}
    />
    {tags.map(e=><p className={styles.tags}>{e}</p>)}
   
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











