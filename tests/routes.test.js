const request = require('supertest')
const hostUrl = `localhost:3001`

// get analytics api endpoint testing

describe('GET /stoke/get-analysis', () => {
    it('should fetch analytics from yahoo server', async () => {
        const res = await request(hostUrl)
            .get('/stoke/get-analysis')
            .query({ symbol: 'AMRN' })
        expect(res.statusCode).toEqual(200)
        expect(res).toHaveProperty('text')
    })
})


// get common data api endpoint testing

describe('GET /common/auto-complete', () => {
    it('should give error for empty query', async () => {
        const res = await request(hostUrl)
            .get('/common/auto-complete')
        expect(res.statusCode).toEqual(422)
        expect(res).toHaveProperty('error')
    })
})

describe('GET /common/auto-complete', () => {
    it('should give error for valid region', async () => {
        const res = await request(hostUrl)
            .get('/common/auto-complete')
            .query({ q: 'AMRN', region: 'ab' })
        expect(res.statusCode).toEqual(422)
        expect(res).toHaveProperty('error')
    })
})

describe('GET /common/auto-complete', () => {
    it('should fetch all news from yahoo server', async () => {
        const res = await request(hostUrl)
            .get('/common/auto-complete')
            .query({ q: 'AMRN' })
        expect(res.statusCode).toEqual(200)
        expect(res).toHaveProperty('text')
    })
})


