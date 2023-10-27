import { updatePhoto } from '../../server/data/updatePhoto'

export default async function updateImage(req, res) {
    try{
        console.log(req.body)
        const {id, data} = req.body
        if(data.tag[0] === null){
            res.status(412).json({message: "É obrigatório associar uma tag à foto."})
        }
        if(data.tag[1] === null) {
            data.tag.pop()
        }
        const result = await updatePhoto(id, data)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}