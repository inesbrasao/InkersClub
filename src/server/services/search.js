
// searchParams {
//     localizacao: string,
//     nome: string,
//     estilo: string
// }
import { getResults, getRandomResults } from "../data/search"

export async function searchPhotos(collection, searchParams) {
    if(!searchParams.city && !searchParams.name && !searchParams.category) {
        const result = await getRandomResults(collection)
        return result
    }
    const result = await getResults(collection, searchParams)
    return result
}