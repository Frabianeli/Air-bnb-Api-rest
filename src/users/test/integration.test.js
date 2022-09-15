const chai = require('chai')
const {it, describe} = require('mocha')
const chaiHttp = require('chai-http')

const app = require('../../app')

chai.use(chaiHttp)

describe('Suite de test de integracion de Usuarios', () => {
    it('Should return 200 when I delete my own user with  my credentials', (done) => {
        chai.request(app)
            .get('/api/v1/users/')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    })
    it('Should return 200 when I  sent a correct ID  in params', (done) => {
        chai.request(app)
            .get('/api/v1/users/76133o21n3p21dNDOdOno1n2o1')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    })
    it('Should return 204 when I delete my own user with  my credentials', (done) => {
        chai.request(app)
            .delete('/api/v1/users/me')
            .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTMzbzIxbjNwMjFkTkRPZE9ubzFuMm8xIiwiZW1haWwiOiJyZW5lQGFjYWRlbWxvLmNvbSIsInJvbCI6Im5vcm1hbCIsImlhdCI6MTY2MTU2NzM5MX0.7igk9HOoy9oAObaHSCnhPqtsz-yW_rPtQP3YB84KVR0')
            .end((err, res) => {
                chai.assert.equal(res.status, 204)
                done()
            })
    })
})