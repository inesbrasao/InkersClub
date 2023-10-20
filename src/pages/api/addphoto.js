//ADICIONAR FOTO
//app.post('/:perfil/add), method:post
//nos parametros envia o perfil(ID?)
//no body envia imagem que pretende adicionar a perfil e estilos
//SE imagem for aceite e receber pelo menos um estilo
//retorna res 200 
//SENAO retorna erro correspondente

//Utilizar o createDocument

export default function addPhoto(req, res) {
    const profile = req.params.profileID
    const imageData = req.body.image

    res.status(200).json()
  
}