import InputText from "./InputText";

export default function ProfileControl(props) {
   //pode receber um idArtist 
   // ou email e senha para criar um novo Artista


   //Se props.idArtist existir faz um pedido de alteração do perfil

   //Se não, cria um novo Artista
   

   //retorna Componente UploadImage e
   //form com 5 InputText de texto (nome, tlm, estúdio, localidade, instagram)  e um botão {se o props.idArtist existe: "atualizar", se não "Criar Perfil"  }
   let profilebutton = false
   if(props.id){
      profilebutton = true
   }

   return <div>
      <InputText name="Nome"/>
      <InputText name="Telemóvel"/>
      <InputText name="Estúdio"/>
      <InputText name="Localidade"/>
      <InputText name="Instagram"/>
      <Button name={profilebutton}/>

   </div>

}