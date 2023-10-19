import Image from 'next/image'
import styles from '@/styles/styles.module.css'

export default function CardImage({props}) {
    //recebe uma imagem e uma (ou duas) tags
    
    //retorna uma div  com uma imagem e um paragrafo

    return <>
    
    <div className={styles.cardImage}>
    <Image
       src="/next.svg"
       //src={props.img}
       width={100}
       height={100}
      alt="Picture of the author"
    />
    <p>
        {props.tags}
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











