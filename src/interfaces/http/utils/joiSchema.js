'use strict'

const joi = require('joi')

const getAnalyticsDataSchema = joi.object().keys({
  symbol: joi.string().required().error(new Error('Symbol can\'t be empty')),
  region: joi.string().valid('US', 'BR', 'AU', 'CA', 'FR', 'DE', 'HK', 'IN', 'IT', 'ES', 'GB', 'SG', null).optional().uppercase({ force: true })
})

const getAllCommonData = joi.object().keys({
  q: joi.string().required().error(new Error('query can\'t be empty')),
  region: joi.string().valid('US', 'BR', 'AU', 'CA', 'FR', 'DE', 'HK', 'IN', 'IT', 'ES', 'GB', 'SG', null).optional().uppercase({ force: true })
})

module.exports = {
  '/get-analysis': getAnalyticsDataSchema,
  '/auto-complete': getAllCommonData
}
