const express = require('express')
const router = require("./routes/routes.js")
const app = express()
const port = 3000
const mongo = require('./configs/mongoConfig.js')

app.use(router)

//database connection
//mongo.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})