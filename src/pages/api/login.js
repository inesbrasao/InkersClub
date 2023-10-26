import {getByEmail} from '../../server/data/login'

//LOGIN
//app.get('/login), method: get
//no body envia email e pass
//SE email e pass existirem e corresponderem
//Retorna token(?)
//SENAO retorna erro

export default async function login(req, res) {
    const {email, password} = req.body
    const user = await getByEmail(email)
    try{
        if ( user === null) {
        res.status(404).json({
            message: "O utilizador não foi encontrado!"
        })
    } else if(user.email === email && user.password === password) {
        res.status(200).json(user._id.toString())
    } else if (user.email === email && user.password !== password) {
        res.status(401).json({
            message: "A password introduzida é inválida!"
        })
    }  else if(user.password === password && user.email !== email){
        res.status(401).json({
            message: "O email introduzido é inválido!"
        })
    }
    }
    catch {
        res.status(400).end()
    }
    
}