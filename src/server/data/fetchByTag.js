import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"


async function fetchByTag(tag, sample) {
    const collection = await GetCollection("inkersclub","images")
    const result = await collection.aggregate([{$match: {tag: tag}}, {$sample: {size: 3} }]).toArray()
    return result
  } 

module.exports = {
    fetchByTag
}