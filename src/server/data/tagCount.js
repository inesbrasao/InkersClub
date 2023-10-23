import { GetCollection } from "./mongo"

async function getTags(collect){
    const collection = await GetCollection("inkersclub",collect)
    const tagData = await collection.aggregate([
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
    const top6 = []

    for(let i = tagArray.length - 1; i > tagArray.length - 7; i--){
        top6.push(tagArray[i][0])

    }

      return top6

}

module.exports = {
    getTags
}