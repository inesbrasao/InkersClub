/* A mesma logica que o deleteAccount */ 

export default async function deleteAccount(res,req){
    const {id, collection} = req.body
    const result = await collection.find({image_id: id}).toArray()
    res.send(204).json(result)
    return result
  } 