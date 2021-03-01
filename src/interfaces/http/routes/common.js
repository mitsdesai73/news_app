'use strict'
const Common = require('../controller/common')
const JoiValidation = require('../controller/joiValidation')

/*****
 * 1. initialize required data
 * 2. set route for analytics
 *  2.1 will setup controller with this route 
 *  2.2 will first validate data using joi 
 *  2.3 will ake request to server to fetch the required data
 */

module.exports = class CommonRoutes {
    constructor(router) {
        this.commonRouter = router
        this.commonController = new Common()
        this.joiValidation = new JoiValidation()
        this.commonRouter.get('/auto-complete', this.joiValidation.joiValidatorHandler, this.commonController.getAllInformation)
    }

    getCommonRouter() {
        return this.commonRouter
    }
}