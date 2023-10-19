// const { ObjectId } = require("mongodb")
// const { GetCollection } = require("./client")


//Create Artist
// async function createDocument(artist) {
//     const collection = await GetCollection("desafioBD", "users")
//     const result = await collection.insertOne(artist)
//     return result
//   }

//Edit Profile
//


//Add Photo
// async function addPhoto(photo) {
//     const collection = await GetCollection("desafioBD", "users")
//     const result = await collection.insertOne(photo)
//     return result
//   }


//Get Result from Search
// async function getResults(param) {
//      Validar que param existe.
//     const collection = await GetCollection("desafioBD", "users")
//     const result = await collection.find({param.["localizacao"]: param.localizacao})
//     return result
//   }


//Get Artist (for profile)
// async function getArtist(id) {
//     const collection = await GetCollection("desafioBD", "users")
//     const result = await collection.find({_id: id})
//     return result
// }

// async function createToken(token) {
//     const collection = await GetCollection("desafioBD", "sessions")
//     const result = await collection.insertOne(token)
//     return result
//   }

// async function getTokenByEmail(email) {
//     const collection = await GetCollection("desafioBD", "sessions")
//     const result = await collection.findOne({email: email})
//     return result
//   }

// async function getToken(token) {
//     const collection = await GetCollection("desafioBD", "sessions")
//     const result = await collection.findOne({ _id: new ObjectId(token)})
//     return result
//   }

// module.exports = {
//     createDocument,
//     readByEmail,
//     getUser,
//     createToken,
//     getTokenByEmail,
//     getToken
// }