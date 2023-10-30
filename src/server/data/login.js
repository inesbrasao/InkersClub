import { GetCollection } from "./mongo"

// Params {
//     email: string
// }
// Function that finds one artist with matching email.
async function getByEmail(email) {
        const collection = await GetCollection("inkersclub", "artists")
        const result = await collection.findOne({email: email})
        return result
}

module.exports = {
    getByEmail
}