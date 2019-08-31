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
});

describe('POST /api/auth/login', () => {
    const loginEndpoint = '/api/auth/login'

    beforeEach(async () => {
        const loggedInUser = { username: 'brey', password: 'password' }
        await request(server).post(loginEndpoint).send(loggedInUser)
    })

    describe('login failure', () => {
        it('should return a status code 500', async () => {
            const res = await request(server).post(loginEndpoint)
            expect(res.status).toBe(500)
        })
    })

    describe('login success', () => {
        it('should return a status of 200', async () => {
            const loggedInUser = { username: 'brey', password: 'password' }
            const res = await request(server).post(loginEndpoint).send(loggedInUser)
            expect(res.status).toBe(200)
        })
    })
})