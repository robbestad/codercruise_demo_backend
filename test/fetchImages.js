const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/codercruise'
const getImages = require("../src/index")
const assert = require("chai").assert;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const should = chai.should();


let db = null

MongoClient.connect(url, (err, _db) => {
    if (err) throw err
    db = _db
})

describe('Mongo test', function () {
    it('should return an array of data', function () {
        return getImages(db).then(data => data).should.eventually.have.length(2)
    });
});