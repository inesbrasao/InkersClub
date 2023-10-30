// Params {
//     data: object,
//     collect: string
// }
// Function that creates a new entry in the DB.
export default async function addPhoto(req, res) {
    const {data, collection} = req.body
    const result = await createDocument(data, collection)
    res.status(200).json(result.insertedId)
}