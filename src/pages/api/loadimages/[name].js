import fs from 'fs'
import path from 'path'

const IMAGES_PATH = "images/"


export default function (req, res) {
    const { name } = req.query
    console.log(name)
    const filePath = path.resolve('.', `${IMAGES_PATH}`, name)

    console.log(filePath)

    const imageBuffer = fs.readFileSync(filePath)
    console.log(imageBuffer)

    res.setHeader('Content-Type', 'image/jpg')

    res.send(imageBuffer)
}