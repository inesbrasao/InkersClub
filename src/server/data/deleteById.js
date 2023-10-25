import { GetCollection } from "/.mongo"
import {ObjectId}  from "mongodb"

async function deleteById(id) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    console.log(result.deletedCount)
    return result.deletedCount
  }

  module.exports = {
    deleteById
}