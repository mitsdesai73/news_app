'use strict'
const Schemas = require('../utils/joiSchema')

/*****
 * 1. based on path will get schema from schema file
 *   1.1 if didn't find schema then will send error response to clinet
 * 2 will validate request query data
 *   2.1 if data is not correct will send error response
 * 3. assign joi result value to req.query
 * 4. if data is valid then will go to next controller
 */
module.exports = class JoiValidation {
    joiValidatorHandler(req, res, next) {
        const schema = Schemas[`${req.route.path}`]
        if (!schema) {
            res.status(422)
            return res.send({
                error: {
                    message: 'No schema found for this request'
                },
                message: 'Opps! Something went wrong. Please try again later.'
            })
        }

        const joiResult = schema.validate(req.query)
        console.log(joiResult)
        if (joiResult && joiResult.error) {
            let message = joiResult.error.message || joiResult.error.details[0].message
            message = message.replace(new RegExp(/[\\"]*/, 'gm'), '')
            res.status(422)
            return res.send({
                error: {
                    message: message
                },
                message: message
            })
        }
        req.query = joiResult.value
        next()
    }
}