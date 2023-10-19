
// searchParams {
//     localizacao: string,
//     nome: string,
//     estilo: string
// }
function SearchPhotos(searchParams) {
    if(Object.keys(searchParams).length === 0) {
        return getRandomCenas()
    }
    return getResults(searchParams)
}