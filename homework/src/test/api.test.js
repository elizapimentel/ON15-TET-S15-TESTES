const request = require('supertest')
const app = require('../app')


describe("API Order test", () => {
    //get all test
    test("GET /order/all", (done) => {
        request(app)
            .get("/order/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).not.toBe(0)
            })
            .end((err, res) => {
                if(err) return done(err)
                return done()
            })
    })
})