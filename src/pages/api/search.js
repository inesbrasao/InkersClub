//PÁGINA DE PESQUISA
// app.get('/pesquisa'), method:get
// SE não tiver querys: retorna a totalidade do banco. 
// SENAO - se tiver querys (estilo, localizacao ou nome): pesquisa na base de dados e retorna lista filtrada por query

export default function search(req, res) {
    const {localizacao, estilo, nome} = req.query
   //chamamos servicoes
   console.log({localizacao, estilo, nome})
   SearchPhotos({localizacao, estilo, nome})
    res.status(200).json({mesage:  req.query.localizacao })
}