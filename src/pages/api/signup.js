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
    //const messageError = findErrors(req.body)
    //if (Object.keys(messageError).length == 0) {
    const result = await getByEmail(email)
    if(!result && password === passwordConfirmation){
        const user = await createDocument({email: email, password: password}, "artist")
        res.status(201).json({
        message: "Utilizador Criado com Sucesso!", _id: user.insertedId})
    } else if (!result){
        res.status(400).json({ message: "Password de confirmação não corresponde a password."})

    } else {
        res.status(400).json({ message: "Email já existe."})
    }
// } else {
//     res.status(400).json({
//         message: "Os dados introduzidos não são válidos.",
//         errors: messageError
//     })
// }
}