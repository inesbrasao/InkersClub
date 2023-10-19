import Button from "./Button";
import Tags from "./Tags";

export default function ShowImage({artist, image}) {
   //recebe: 
   // uma imagem/url
   // as tags
   // o artista

   const pathImage = image.path
   const tags = image.tags
   const artistName = artist.name




   //retorna 
  
  return <div>

    <Image
       src={pathImage}
       width={500}
       height={500}
       alt={artistName}
    />

   <div>
      <div>
         {tags.map(e => <Tags tagName = {e}/>)}
      </div>
      <div>
        <p>{artistName}</p>
         <Button name="Ver perfil" className={styles.buttonUnderlined}/>
      </div>
      
   </div>

   </div>

  
   

   
}