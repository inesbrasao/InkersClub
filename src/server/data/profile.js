import { GetCollection } from "./mongo"


async function updateByEmail(email, data) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.updateOne({email: email}, {$set: data}, {upsert: true})
    return result.upsertedId
  }

module.exports = {
    updateByEmail
}