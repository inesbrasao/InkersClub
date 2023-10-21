import Image from 'next/image'
import styles from '@/styles/styles.module.css'

export default function CardImage({ artist, image }) {
    //recebe uma imagem e uma (ou duas) tags

    const pathImage = image.path
    const tags = image.tag
    const artistName = image.artist_id   

    console.log(image)

    //retorna uma div  com uma imagem e um paragrafo

    return <>
  <div className={styles.cardImage}>
            <Image
                src={pathImage}
                //src={props.img}
                width={100}
                height={100}
                alt={artistName}
            />
            <p>
                {tags}
            </p>
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











