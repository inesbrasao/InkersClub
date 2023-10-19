import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function getResults(collect, params) {
    const collection = await GetCollection("inkersclub",collect)
    const { city, name, category} = params
    let query = {};

    if (name) {
      query.name = name
    }

    if ( city) {
      query.city = city
    }

    if ( category ) {
      query.category = category
    }
    
    const result = await collection.find(query).toArray()
    return result
  } 



async function getRandomResults(colect) {
  const collection = await GetCollection("inkersclub", colect)
  const result = await collection.aggregate([{$sample: {size: 5} }]).toArray()
  return result
} 

module.exports = { 
  getResults,
  getRandomResults
 }