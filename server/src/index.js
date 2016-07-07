import Express from 'express'
import Path from 'path'
import Favicon from 'serve-favicon'
import Fs from 'fs'

// Express App
let app = Express()

// Home
import Home from '../../home/server.js';
app.use('/', Home);

// Codepen overlay.
import Overlay from '../../codepen-overlay/server'
app.use('/codepen-overlay', Overlay);

// File not found.
app.use((req, res, next) => {
  res.redirect(301, '/');
})

app.listen(8002, function () {
  console.log('Example app listening on port 8002!')
})
