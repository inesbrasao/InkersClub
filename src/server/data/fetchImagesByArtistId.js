import { GetCollection } from "./mongo"


async function fetchImagesByArtistId(id) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.find({artist_id: id}).toArray()
    return result
  } 

module.exports = {
    fetchImagesByArtistId
}