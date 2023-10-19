import {updateByEmail} from '../../server/data/profile'

//CRIAR PERFIL
//app.patch('/criarconta/criarperfil), method:patch
//no body envia imagem de perfil, nome, apelido, estudio, localidade, instagram
//retorna res 200 acrescenta elementos a artista
//SENAO(?) retorna erro correspondente

export default async function profile(req, res) {
    const {email, name, shop, city, instagram, phone} = req.body
    try{
        const updatedProfile = await updateByEmail(email, {name, shop, city, instagram, phone})
        res.status(200)
    }
    catch{
        res.status(400)
    }
}