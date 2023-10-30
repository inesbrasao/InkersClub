import { GetCollection } from "./mongo"

// Params {
//     id: string
// }
// Function that searches images in the specified DB that match the id in the parameters.
async function fetchImagesByArtistId(id) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.find({artist_id: id}).toArray()
    return result
  } 

module.exports = {
    fetchImagesByArtistId
}