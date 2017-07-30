const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/codercruise"
const getImages = require("../src/index")
const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
const should = chai.should()

let db = null

describe("Mongo test", function () {

    before(function (done) {
        MongoClient.connect(url, (err, _db) => {
            if (err) throw err
            db = _db
            done()
        })
    });

    it("should return an array of data", function () {
        return getImages(db).then(data => data).should.eventually.have.length(2)
    })

    after(function (done) {
        db.close()
        done()  
    })

})