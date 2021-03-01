'use strict'
const StokeAPI = require('../api/stoke')
/*****
 * 1. make request to api class to get the data
 * 1.1 if we got the data will send response to client
 * 1.2 if we got error will sned error response to client
 */
module.exports = class Stoke {
    async getAnaytics(req, res) {
        try {
            const analyticsData = await new StokeAPI().getAnayticsApi(req.query)
            res.status(200)
            res.send({ data: analyticsData, message: 'Analytics data fetched successfully.' })
        } catch (error) {
            console.log(error)
            res.status(200)
            res.send({
                error: {
                    message: error.message
                },
                message: 'Error while fetching analytics data. Please try again'
            })
        }
    }
}