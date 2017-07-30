const getImages = db => new Promise((resolve, reject) => {
    const cursor = db.collection("images").find()
    if (!cursor) reject("Something went wrong")
    cursor.toArray().then(data => resolve(data))
})

module.exports = getImages