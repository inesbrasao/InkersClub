import {createDocument} from '../../server/data/signup'
import {fetchByPath} from '../../server/data/fetchByPath'
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


  if (req.method === "POST") {
    
    //Linha mágica, guarda 1 ficheiro e retorna o caminho onde ficou guardado
    const path = await uploadSubmissionFile(req, res)
    const rPath = "/" + path

    //GUARDAR NA BASE DE DADOS
    const doc = await createDocument({"path": rPath}, "images")
    const id = await fetchByPath(rPath)


    return res.status(200).json({ "id": id.toString() })

    
  }
  return res.status(404).json({ message: 'not_found' })
}






//Função a simular ser um middleware
export async function uploadSubmissionFile(req, res) {

  //Definições do multer, podes definir tamanhos máximos dos ficheiros, se queres guardar mais ficheiros, onde ficam guardados e outras coisas
  const upload = multer({
    storage: multer.diskStorage({
      destination: 'images/'
    })
  })

  //Criamos um middleware
  const multerSingle = initMiddleware(upload.any())
  //executamos o middleware
  await multerSingle(req, res)


  return `images/${req.files[0].filename}`
}

//Função que recebe uma função e a transforma num middleware a espera de ser executado
export function initMiddleware(middleware) {
  return (req, res) =>
      new Promise((resolve, reject) => {
          middleware(req, res, (result) => {
              if (result instanceof Error) {
                  return reject(result);
              }
              return resolve(result);
          });
      });
}

//Dizer ao next para não ler o req.body como JSON
export const config = {
  api: {
    bodyParser: false,
  },
};

