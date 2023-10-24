//PÁGINA DE PESQUISA
// app.get('/pesquisa'), method:get
// SE não tiver querys: retorna a totalidade do banco. 
// SENAO - se tiver querys (estilo, localizacao ou nome): pesquisa na base de dados e retorna lista filtrada por query
import {searchPhotos} from '../../server/services/search'

export default async function search(req, res) {
    try {
        const {city, tag, name} = req.query
        console.log("search", req.query)

        const result = await searchPhotos({city, tag, name})
        result.length === 0 ? res.status(204).end() : res.status(200).json(result) 
    }
    catch{
        res.status(400)
    }
    
}