import { GetCollection } from "./mongo"

// Params {
//     email: string,
//     data: object
// }
// Function that updates the artist entry in DB by email.
async function updateByEmail(email, data) {
    const collection = await GetCollection("inkersclub", "artists")
    const result = await collection.updateOne({email: email}, {$set: data}, {upsert: true})
    return result.upsertedId
  }

module.exports = {
    updateByEmail
}