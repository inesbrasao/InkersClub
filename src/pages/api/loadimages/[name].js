import fs from 'fs'
import path from 'path'

const IMAGES_PATH = "images/"


export default function (req, res) {
    const { name } = req.query
    const filePath = path.resolve('.', `${IMAGES_PATH}`, name)


    const imageBuffer = fs.readFileSync(filePath)

    res.setHeader('Content-Type', 'image/jpg')

    res.send(imageBuffer)
}