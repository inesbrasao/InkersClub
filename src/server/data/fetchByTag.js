import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function fetchByTag(tag) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.aggregate([{$match: {tag: tag}}, {$sample: {size: 10} }]).toArray()
    return result
  } 

module.exports = {
    fetchByTag
}