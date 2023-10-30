import { GetCollection } from "./mongo"

// Params {
//     id: string
// }
// Function that searches in the "images" collection for the ones that match the artist_id with the id in the parameters,
// maps the tags in the resulting images and attributes a count to each tag, finds the 3 more popular tags.
async function getArtistTags(id){
    const collection = await GetCollection("inkersclub", "images")
    const tagData = await collection.aggregate([
        { $match: { artist_id: id }},
        { $unwind: '$tag' },
        {
          $group: {
            _id: '$tag',
            count: { $sum: 1 }
          }
        }
      ]).toArray();

    const tagMap = {};
    tagData.forEach((tag) => {
    tagMap[tag._id] = tag.count;
    });

    const tagArray = Object.entries(tagMap).sort((a, b) => a[1] - b[1])
    const top3 = []

    for(let i = tagArray.length - 1; i > tagArray.length - 4; i--){
        if(tagArray[i] === undefined){
            break
        }
        top3.push(tagArray[i][0])

    }

      return top3

}

module.exports = {
    getArtistTags
}