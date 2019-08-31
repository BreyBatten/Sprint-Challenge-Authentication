const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('POST /api/auth/register', () => {
    const registerEndpoint = '/api/auth/register'

    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('registration failure', () => {
        it('should return a status of 500', async () => {
            const res = await request(server).post(registerEndpoint)
            expect(res.status).toBe(500)
        })
    })

    describe('registration success', () => {
        it('should return a status of 201', async () => {
            const user = { username: 'brey', password: 'password' }
            const res = await request(server).post(registerEndpoint).send(user)
            expect(res.status).toBe(201)
        })
    })
})