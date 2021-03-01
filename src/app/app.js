// load env file
require('dotenv').config()
module.exports = class Application {
  constructor({ db, server }) {
    this.db = db
    this.server = server
  }
  // call start server function of server class
  async start() {
    await this.server.startServer()
  }
}