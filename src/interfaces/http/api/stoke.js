'use strict'
const { fetchDataFromServer, getQueryParamsFromObject } = require('../utils/utils')

/*****
 * based on method will gather request data and then hit the https request to yahoo server to get the data
 */
module.exports = class Stoke {
    async getAnayticsApi(searchParams) {
        const url = `${process.env.YAHOO_SERVER_URL}${process.env.ANALYTICS_API_PATH}?${getQueryParamsFromObject(searchParams)}`
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST,
                useQueryString: true,
                'content-type': 'application/json'
            }
        }

        try {
            return await fetchDataFromServer(url, options)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
