import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

// Params {
//     id: string,
//     data: object
// }
// Function that updates info on artist DB entry by the artist ID.
async function updateById(id, data) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data}, {upsert: true})
    return result
  }

module.exports = {
    updateById
}