'use strict'
const Server = require('./interfaces/http/server')
const Application = require('./app/app')

// get server and app configuration and start the server
new Application({ db: null, server: new Server() }).start()