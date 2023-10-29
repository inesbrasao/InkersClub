import {getByEmail} from '../../server/data/login'
import {createDocument} from '../../server/data/signup'

//SIGNUP
//app.post('/criarconta), method:post
//no body envia email, pass, e confirmação
//SE email não existir e pass e confirmação forem iguais
//retorna res 200 e cria documento BD
//SENAO retorna erro correspondente

export default async function signup(req, res) {
    const { email, password, passwordConfirmation} = req.body
    const result = await getByEmail(email)

    try{
        if(!email || !password || !passwordConfirmation){
            res.status(412).end()
        }
        
        if(!result && password === passwordConfirmation){

            const user = await createDocument({email: email, password: password}, "artists")
            res.status(200).json({

            message: "Utilizador Criado com Sucesso!", _id: user.insertedId})
        } else if (!result){
            res.status(409).json({ message: "Password de confirmação não corresponde a password."})

        } else {
            res.status(409).json({ message: "Email já existe."})
        }
    }
    catch {
        res.status(400).end()
    }
}