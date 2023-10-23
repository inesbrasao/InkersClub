import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


//Create Artist
async function createDocument(data, collect) {
    const collection = await GetCollection("inkersclub", collect)
    const result = await collection.insertOne(data)
    return result
  }

module.exports = {
    createDocument
}