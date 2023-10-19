//PÁGINA DE PESQUISA
// app.get('/pesquisa'), method:get
// SE não tiver querys: retorna a totalidade do banco. 
// SENAO - se tiver querys (estilo, localização ou nome): pesquisa na base de dados e retorna lista filtrada por query

export default function search(req, res) {
   
    res.status(200).json({mesage:  req.query.localizacao })
}
export default function search(req, res) {
   
    res.status(200).json({mesage:  req.query.localizacao })
}