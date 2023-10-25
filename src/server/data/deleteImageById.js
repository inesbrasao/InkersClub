import { GetCollection } from "/.mongo"


async function deleteImageById(id) {
    const collection = await GetCollection("inkersclub", "images")
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    console.log(result.deletedCount)
    return result.deletedCount
  }

  module.exports = {
    deleteImageById
}