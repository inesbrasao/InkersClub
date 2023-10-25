import {uploadSubmissionFile} from '../addphoto'
import {updateById} from '../../../server/data/updateById'
//ADICIONAR FOTO
//app.post('/:perfil/add), method:post
//nos parametros envia o perfil(ID?)
//no body envia imagem que pretende adicionar a perfil e estilos
//SE imagem for aceite e receber pelo menos um estilo
//retorna res 200 
//SENAO retorna erro correspondente

//Utilizar o createDocument

import multer from "multer"

export default async function handler(req, res) {
    const {id} = req.query


  if (req.method === "POST") {
    
    //Linha mágica, guarda 1 ficheiro e retorna o caminho onde ficou guardado
    const path = await uploadSubmissionFile(req, res)

    //GUARDAR NA BASE DE DADOS
    const doc = await updateById(id, {"path": "/" + path})


    return res.status(200).json(doc)

    
  }
  return res.status(404).json({ message: 'not_found' })
}

export const config = {
    api: {
      bodyParser: false
    }
  }