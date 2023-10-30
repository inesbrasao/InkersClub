import { GetCollection } from "./mongo"

// Params {
//     collect: string,
//     params: object
// }
// Function that gets results from DB based on the specified parameters.
async function getResults(collect, params) {
    const collection = await GetCollection("inkersclub",collect)
    const result = await collection.find(params).toArray()
    return result
  } 


// Params {
// }
// Function that gets a sample of 10 results from DB.
async function getRandomResults() {
  const collection = await GetCollection("inkersclub", "images")
  const result = await collection.aggregate([{$sample: {size: 10} }]).toArray()
  return result
} 

module.exports = { 
  getResults,
  getRandomResults
 }