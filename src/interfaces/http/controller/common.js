'use strict'
const CommonAPI = require('../api/common')
module.exports = class common {

    /*****
 * 1. make request to api class to get the data
 * 1.1 if we got the data will send response to client
 * 1.2 if we got error will sned error response to client
 */

    async getAllInformation(req, res) {
        try {
            const allCommonData = await new CommonAPI().getAllInformationApi(req.query)
            res.status(200)
            res.send({ data: allCommonData, message: 'All news data fetched successfully.' })
        } catch (error) {
            console.log(error)
            res.status(200)
            res.send({
                error: {
                    message: error.message
                },
                message: 'Error while fetching all news data. Please try again'
            })
        }
    }
}