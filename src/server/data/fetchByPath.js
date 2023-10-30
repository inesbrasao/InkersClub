import { GetCollection } from "./mongo"

// Params {
//     path: string
// }
// Function that returns image that matches the path in the parameters.
async function fetchByPath(path) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.findOne({path: path})
    return result._id
  } 

module.exports = {
    fetchByPath
}