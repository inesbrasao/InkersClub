import { GetCollection } from "./mongo"


async function getResults(collect, params) {
    const collection = await GetCollection("inkersclub",collect)
    const result = await collection.find(params).toArray()
    return result
  } 



async function getRandomResults() {
  const collection = await GetCollection("inkersclub", "images")
  const result = await collection.aggregate([{$sample: {size: 10} }]).toArray()
  return result
} 

module.exports = { 
  getResults,
  getRandomResults
 }