import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function updateById(id, data) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data}, {upsert: true})
    return result
  }

module.exports = {
    updateById
}