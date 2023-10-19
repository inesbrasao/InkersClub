
// searchParams {
//     localizacao: string,
//     nome: string,
//     estilo: string
// }
import { getResults } from "../data/search"

export async function searchPhotos(searchParams) {
    if(Object.keys(searchParams).length === 0) {
        //return getRandomCenas()
        const result = await getResults()
        return result
    }
    const result = await getResults()
    return result
    //return getResults(searchParams)
}