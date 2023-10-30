import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

// Params {
//     id: string,
//     collect: string
// }
// Function that returns image or artist that match the id in the parameters.
async function fetchById(id, collect) {
    const collection = await GetCollection("inkersclub",collect)
    const result = await collection.findOne({_id: new ObjectId(id)})
    return result
  } 

module.exports = {
    fetchById
}