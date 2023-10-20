export default function ProfileHeader({artista}) {

   //recebe informações do artista

         return ( 
            //retorna 
                  //<div>
                  //imagem circular, 
                  // h1 com ArtistName
                  //paragrafo com estudio(se houver)
                  //paragrafo localidade
                  //</div>

            <div>
               <div>
                  <h1>{artista.name}</h1>
                  <img src="/6531323d939a1134f480717f/image1.jpg" alt="aquarela"/>
                  <p>{artista.shop}</p>
                  <p>{artista.city}</p>
               </div>




               <div>
                  <p>neo tradicional</p>
                  <p>aquarela</p>
               </div>

               <div>
                  <a href ="mailto:">joao.silva@gmail.com</a>
                  <p>{artista.instagram}</p>
               </div>

               <button onClick={() => {
   //  alert('clicked');
  }}>editar </button>


            <button onClick={() =>{

            }}>
            adicionar foto</button>
            </div>
         );
  


   //<div>
   // tags mais relevantes para este artista
   //</div>
  

   //<div>
   //link emailto email
   //paragrafo instagram
   //</div>


  //botão para editar perfil 
 
 
  //? como renderizar o botão de editar apenas para artista dono do perfil?)

   
   // botão para add foto

}