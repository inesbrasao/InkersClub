
// searchParams {
//     localizacao: string,
//     nome: string,
//     estilo: string
// }
import { getResults, getRandomResults } from "../data/search"

export async function searchPhotos(searchParams) {
    const { city, name, tag } = searchParams
    let imageCollection = []
    let artistCollection = []
    let result = []


    if(!city && !name && !tag) {
        const result = await getRandomResults()
        return result
    }

    if(tag){
        let query = {};
        query.tag = tag
        imageCollection = await getResults("images", query)
        console.log("oi", imageCollection)
    } 
    if (city || name){
        let query = {}
        if ( city) {
        query.city = city
        }

        if ( name ) {
        query.name = name
        }
        artistCollection = await getResults("artists", query)
        console.log("oi", artistCollection)
    }

    if(imageCollection.length === 0){
        return artistCollection
    } else if(artistCollection.length === 0) {
        return imageCollection
    } else {

        for(let i = 0; i < imageCollection.length; i++){
            for(let j = 0; j < artistCollection.length; j++){
                console.log(imageCollection[i].artist_id)
                console.log(artistCollection[j]._id.toString())
                if(imageCollection[i].artist_id === artistCollection[j]._id.toString()){
                    console.log("oi")
                    result.push(imageCollection[i])
                }
            }
        }
    }
    return result
}