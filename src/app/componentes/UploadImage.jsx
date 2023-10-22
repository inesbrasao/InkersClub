export default function UploadImage(props) {
   //não recebe nada


   //retorna
   //<input type="file" onChange={handleChange} />
   // botão carregar imagem (acho que ele esta incluido input type file)

   return (
      <div className="upload">
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Adicionar</button>
          </form>
      </div>
    );
   //? o componente da imagem seria reutilizavel para a criação e edição do perfil, sendo assim onde podemos colocar o botão "adicionar foto"?
}


