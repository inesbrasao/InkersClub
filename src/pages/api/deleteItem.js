import {deleteById} from "../../server/data/deleteById"

export default async function deleteItem(req, res) {
  const { id, collection } = req.body
  console.log("id :" + id)
  
  const result = await deleteById(id, collection)
  res.send(200).json(result)
}