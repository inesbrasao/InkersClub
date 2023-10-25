import { updatePhoto } from '../../server/data/updatePhoto'

export default async function updateImage(req, res) {
    console.log("ola")
    try{
        console.log(req.body)
        const {id, data} = req.body
        const result = await updatePhoto(id, data)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}