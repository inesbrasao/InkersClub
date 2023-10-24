async function deleteById(id) {
    const collection = await getMongoCollection("inkersclub", "artists")
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    console.log(result.deletedCount)
    return result.deletedCount
  }

deleteById()