import { GetCollection } from "./mongo"
import {ObjectId}  from "mongodb"

export async function deleteById(id,collect) {
  console.log("olq")
    const collection = await GetCollection("inkersclub", collect)
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    return result
  }
