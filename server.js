const Koa = require("koa")
const path = require("path")
require("colors")
const Router = require("koa-router")
const router = new Router()
const convert = require("koa-convert")
const bodyParser = require("koa-body")
const logger = require("debug")
const cors = require('koa-cors');

const getImages = require("./src/index")
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://localhost:27017/codercruise'
let db = null

MongoClient.connect(url, (err, _db) => {
    if (err) throw err
    db = _db
})

router
    .get("/api/images", async ctx => {
        const {key} = ctx.params
        ctx.body = await getImages(db)
            .then(data => data)
    })


const app = new Koa()
    .use(cors())
    .use(convert(bodyParser()))
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(1337, _ => {
    logger("app:start")(`server.js listening on port 1337`)
})

const cleanup = () => {
    console.log("closing db")
    db.close()
    process.exit()
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)