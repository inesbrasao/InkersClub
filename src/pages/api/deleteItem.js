import {deleteById} from "../../server/data/deleteById"
import { fetchImagesByArtistId } from '../../server/data/fetchImagesByArtistId'

export default async function deleteItem(req, res) {
  try{
    const { id, collection } = req.body
    if(collection === "artists"){

      const images = await fetchImagesByArtistId(id)
      const deleteImages = await images.map(e => deleteById(e._id, "images"))
      const result = await deleteById(id, collection)
      res.send(200).json(result)
    } else {
      const result = await deleteById(id, collection)
    res.send(200).json(result)
    }
  }
  catch{
    res.status(400).end()
  }
}