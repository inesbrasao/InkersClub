//LOGIN
//app.get('/login), method: get
//no body envia email e pass
//SE email e pass existirem e corresponderem
//Retorna token(?)
//SENAO retorna erro

export default function login(req, res) {
    const {email, pass} = req.body

    res.status(200)
  
}