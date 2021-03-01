'use strict'
const Stoke = require('../controller/stoke')
const JoiValidation = require('../controller/joiValidation')

/*****
 * 1. initialize required data
 * 2. set route for analytics
 *  2.1 will setup controller with this route   
 *  2.2 will first validate data using joi 
 *  2.3 will make request to server to fetch the required data
 */

module.exports = class StokeRoutes {
    constructor(router) {
        this.stokeRouter = router
        this.stokeController = new Stoke()
        this.joiValidation = new JoiValidation()
        this.stokeRouter.get('/get-analysis', this.joiValidation.joiValidatorHandler, this.stokeController.getAnaytics)
    }

    getStokeRouter() {
        return this.stokeRouter
    }
}