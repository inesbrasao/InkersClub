import { fetchImagesByArtistId } from '../../server/data/fetchImagesByArtistId'

export default async function getById(req, res) {
    const {id} = req.body
    const result = await fetchImagesByArtistId(id)
    res.status(200).json(result)
}