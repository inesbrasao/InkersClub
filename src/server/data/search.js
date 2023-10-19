import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function getResults() {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.find().toArray()
    return result
  } 

module.exports = { getResults }

// async function getRandomResults() {
//   const collection = await GetCollection("images")
//   const result = await collection.(1)
//   // return result
// }    //  Validar que param existe.