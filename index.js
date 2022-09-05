const express = require('express')
const router = require("./routes/routes.js")
const app = express()
const port = 3008
const mongo = require('./configs/mongoConfig.js')
const cors = require('cors');

app.use(cors());
app.use(router)

//database connection
//mongo.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})