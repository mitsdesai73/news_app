'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const StokeRoutes = require('./routes/stoke')
const CommonRoutes = require('./routes/common')

module.exports = class Server {

    // initialize required library and setup the routers for the application 
    constructor() {
        this.app = express()
        this.stoke = new StokeRoutes(express.Router()).getStokeRouter()
        this.common = new CommonRoutes(express.Router()).getCommonRouter()
        this.port = null
    }

    getPort() {
        return this.port
    }

    // this function with start the server
    async startServer({ port = process.env.PORT } = {}) {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())

        // set routes
        this.app.use('/stoke', this.stoke)
        this.app.use('/common', this.common)

        return new Promise((resolve) => {
            const server = this.app.listen(port, (error) => {
                console.error(error)
                this.port = server.address().port
                console.info(`Listening on port ${server.address().port}`)
                const originalClose = server.close.bind(server)
                server.close = () => {
                    // eslint-disable-next-line promise/param-names
                    return new Promise((resolveClose) => {
                        originalClose(resolveClose)
                    })
                }
                resolve(server)
            })
        })
    }
}