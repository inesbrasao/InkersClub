import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

async function getByEmail(email) {
        const collection = await GetCollection("inkersclub", "artists")
        const result = await collection.findOne({email: email})
        return result
}

module.exports = {
    getByEmail
}