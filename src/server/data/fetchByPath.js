import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function fetchByPath(path) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.findOne({path: path})
    console.log(result)
    return result._id
  } 

module.exports = {
    fetchByPath
}