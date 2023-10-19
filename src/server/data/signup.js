import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


//Create Artist
async function createDocument(artist) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.insertOne(artist)
    return result
  }

module.exports = {
    createDocument
}