// const fs = require("fs")
import {MongoClient, ObjectId} from "mongodb"
// import { GetCollection } from "./mongo"


// const BASE_DATA_FOLDER = "./initial_data"


import data_images from "./inkersclub.images.json"  assert { type: "json" }
import data_artists from "./inkersclub.artists.json" assert { type: "json" }


const dataImages = data_images.map(ele => ({...ele, _id: new ObjectId(ele._id)}))
const dataArtists = data_artists.map(ele => ({...ele, _id: new ObjectId(ele._id)}))


// Connection URL
const url = "mongodb://127.0.0.1:27017";

// Database Name
const defaultDbName = "inkersclub";
const collectionImages = "images";
const collectionArtists = "artists";
let client = undefined

async function GetMongoClient() {
    if (!client) {
        try {
            client = new MongoClient(url);
            await client.connect();
        } catch (err) {
            console.error(err)
        }
    }
    return client;
}

async function CloseConnection() {
    return await client.close();
}


async function AddData() {

    console.log(data_artists)
    const collection = await GetCollection(collectionArtists, defaultDbName)
    const collection2 = await GetCollection(collectionImages, defaultDbName)
    return (
        await collection.insertMany(dataArtists),
        await collection2.insertMany(dataImages)),
        console.log("DONE"),
        CloseConnection()
}




async function GetCollection(collectionName, dbName = defaultDbName) {
    const cli = await GetMongoClient();
    const db = cli.db(dbName);
    return db.collection(collectionName);
}

// CloseConnection()

AddData()



