'use strict'
const fetch = require('node-fetch')
/// fetch data from server
async function fetchDataFromServer(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(res => resolve(res.json()))
            .catch((error) => {
                reject(error)
            })
    })
}

// create query params

function getQueryParamsFromObject(params) {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&')
}
module.exports = {
    fetchDataFromServer,
    getQueryParamsFromObject

}