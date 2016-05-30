import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'

let app = express()
app.use(favicon(path.join(__dirname, '../../content/images/favicon.ico')))
app.use(express.static(path.join(__dirname, '../../content')))

let server = app.listen(8002, function () {
  console.log('Example app listening on port 8002!')
})
