import { GetCollection } from "./mongo"
import {ObjectId}  from "mongodb"

// Params {
//     id: string,
//     collect: string
// }
// Function that deletes entry in the specified collection that match the id in the parameters.
export async function deleteById(id,collect) {
    const collection = await GetCollection("inkersclub", collect)
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    return result
  }
