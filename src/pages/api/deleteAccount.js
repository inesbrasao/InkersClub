/*Apagar um ObjectId do backend */
/* CRUD DElETE*/ 
/*DELETE/ObjectId/numero do Id*/
/*fetch API*/ 


export default async function deleteAccount(res,req){
    const {artisttId} = req.body
    const result = await collection.find({artist_id: id}).toArray()
    return result
  } 

module.exports = {
    deleteAccount
}


