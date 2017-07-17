// const MongoClient = require('mongodb').MongoClient
// const assert = require('assert')
// const ObjectId = require('mongodb').ObjectID
// const url = 'mongodb://localhost:27017/codercruise'

const getImages = db => new Promise((resolve, reject) => {
    const cursor = db.collection("images").find()
    if (!cursor) reject("Something went wrong")
    cursor.toArray().then(data => resolve(data))
})

// MongoClient.connect(url, (err, db) => {
//     getImages(db).then(data=> data)
// })

module.exports = getImages