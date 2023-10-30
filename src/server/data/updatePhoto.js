import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

// Params {
//     id: string,
//     data: object
// }
// Function that atributes tags and artist_id to image DB entry.
async function updatePhoto(id, data) {
    const collection = await GetCollection("inkersclub", "images")
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data}, {upsert: true})
    return result
  }

module.exports = {
    updatePhoto
}