import { getResults, getRandomResults } from "../data/search"

// searchParams {
//     city: string,
//     name: string,
//     tag: string
// }
export async function searchPhotos(searchParams) {
    const { city, name, tag } = searchParams
    let imageCollection = []
    let artistCollection = []
    let result = []

    //If the function doesn't recieve any search parameters
    if(!city && !name && !tag) {
        const result = await getRandomResults()
        return result
    }
    // If the function recieves the tag parameter
    // it get's its result from the "images" collection
    if(tag){
        let query = {};
        query.tag = tag
        imageCollection = await getResults("images", query)
    } 
    // If the function recieves the city or name parameter
    // it get's its result from the "artists" collection
    if (city || name){
        let query = {}
        if ( city) {
        query.city = city
        }

        if ( name ) {
        query.name = name
        }
        artistCollection = await getResults("artists", query)
    }
    
    // If it gets results from both collections, 
    // loops through both collections to get the images which have the correspondent artist_id 
    if(city && tag || name && tag){
        for(let i = 0; i < imageCollection.length; i++){
            for(let j = 0; j < artistCollection.length; j++){
                if(imageCollection[i].artist_id === artistCollection[j]._id.toString()){
                    result.push(imageCollection[i])
                }
            }
        }
        return result
    // If it only has results from the "artists" collection,
    // gets all the images in the DB and finds the ones with the correspondent artist_id
    } else if(imageCollection.length === 0){
        const images = await getResults("images")
        for(let i = 0; i < images.length; i++){
            for(let j = 0; j < artistCollection.length; j++){
                if(images[i].artist_id === artistCollection[j]._id.toString()){
                    result.push(images[i])
                }
            }

        }
        return result
    // If it only has results from the "images" collections, returns it.
    } else if(artistCollection.length === 0) {
        return imageCollection
    }
}