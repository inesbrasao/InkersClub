const artista = {
      "name": "João Silva",
      "email": "joao.silva@gmail.com",
      "instagram": "@joaosilva",
      "city": "Lisboa",
      "shop": "ArtStudio Lisboa",
      "phone": "+351912345678",
      "password": "SenhaSegura123",
      "category": ["neo tradicional", "aquarela"]
  };
  
  export default function ProfileHeader(artista) {

   //recebe informações do artista
   

         return (
            <div>
               <div>
                  <h1>{artista.name}</h1>;
                  <img src="/6531323d939a1134f480717f/image1.jpg" alt="image1"/>
                  <p>{artista.shop}</p>
                  <p>{artista.city}</p>
               </div>

               <div>
                  <p>neo tradicional</p>
                  <p>aquarela</p>
               </div>

               <div>
                  <link to="/"/>
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
   //retorna 
   //<div>
   //imagem circular, 
   // h1 com ArtistName
   //paragrafo com estudio(se houver)
   //paragrafo localidade
   //</div>



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