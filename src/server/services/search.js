
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
    console.log("searchphotos", searchParams)


    if(!city && !name && !tag) {
        const result = await getRandomResults()
        return result
    }

    if(tag){
        let query = {};
        query.tag = tag
        imageCollection = await getResults("images", query)
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
    }
    
    if(city && tag || name && tag){
        for(let i = 0; i < imageCollection.length; i++){
            for(let j = 0; j < artistCollection.length; j++){
                if(imageCollection[i].artist_id === artistCollection[j]._id.toString()){
                    result.push(imageCollection[i])
                }
            }
        }
        return result
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
    } else if(artistCollection.length === 0) {
        return imageCollection
    }
}