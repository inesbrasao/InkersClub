import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function fetchById(id, collect) {
    const collection = await GetCollection("inkersclub",collect)
    const result = await collection.findOne({_id: new ObjectId(id)})
    return result
  } 

module.exports = {
    fetchById
}