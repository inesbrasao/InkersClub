import {createDocument} from '../../server/services/signup'

//ADICIONAR FOTO
//app.post('/:perfil/add), method:post
//nos parametros envia o perfil(ID?)
//no body envia imagem que pretende adicionar a perfil e estilos
//SE imagem for aceite e receber pelo menos um estilo
//retorna res 200 
//SENAO retorna erro correspondente

//Utilizar o createDocument

export default async function addPhoto(req, res) {
    const {data, collection} = req.body
    const result = await createDocument(data, collection)
    res.status(200).json()
}