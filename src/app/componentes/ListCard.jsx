import CardImage from "./CardImage"
import styles from '@/styles/Home.module.css'


export default function ListCard(props) {
    //recebe uma  lista de objetos  e faz um map dos objetos

    // cada objeto será um componente CardImage(com as props: imagem, IdArtist e tags)
    
    //retorna uma lista de Cards


    const arrInfos = [
        {idArtist : 1,
        imgURL: "/next.svg" ,
        tags : ["New School"]},
        {idArtist : 2,
        imgURL: "/next.svg" ,
        tags : ["New School"]},
        {idArtist : 3,
        imgURL: "/next.svg" ,
        tags : ["New School"]},
        {idArtist : 4,
        imgURL: "/next.svg" ,
        tags : ["New School"]},
    ]

    return <div >
    olá do ListCard
    {arrInfos.map(e => <CardImage key={e.idArtist} props={e}/>)}

    </div>
    
}