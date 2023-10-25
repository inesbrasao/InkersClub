/*Apagar um ObjectId do backend */
/* CRUD DElETE*/ 
/*DELETE/ObjectId/numero do Id*/
/*fetch API*/ 


export default async function deleteAccount(res,req){
    const {artisttId} = req.body
    const result = await collection.find({artist_id: id}).toArray()
    res.send(204).json(result)
    return result
  } 




