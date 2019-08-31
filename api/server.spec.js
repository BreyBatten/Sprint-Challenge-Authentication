const request = require('supertest');
const server = require('./server');

describe('server.js', () => {

    describe('GET /', () => {
        it('should return status code 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return an { message: "FINAL SPRINT CHALLENGE OF FSW!!" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({message: "FINAL SPRINT CHALLENGE OF FSW!!"});
        })
    })   
})