import { GetCollection } from "./mongo"

// Params {
//     tag: string
// }
// Function that return a sample of 3 images that match the tag in the parameters.
async function fetchByTag(tag) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.aggregate([{$match: {tag: tag}}, {$sample: {size: 3} }]).toArray()
    return result
  } 

module.exports = {
    fetchByTag
}