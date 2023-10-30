import { GetCollection } from "./mongo"

// Params {
//     data: object,
//     collect: string
// }
// Function that creates a new DB entry (collect = DB collection).
async function createDocument(data, collect) {
    const collection = await GetCollection("inkersclub", collect)
    const result = await collection.insertOne(data)
    return result
  }

module.exports = {
    createDocument
}