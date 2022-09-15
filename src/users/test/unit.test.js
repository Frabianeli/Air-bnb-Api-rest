const { assert } = require("chai")
const { it, describe } = require("mocha")

const usersControllers = require('../users.controllers')

describe('Test nitario de mis usuarios', () => {
    it('Should return nwe user when I sent correct data', (done) => {
        const body = {
            first_name: "Deysi",
            last_name: "Deysi Coello",
            email: "deysi@academlo.com",
            password: 'deysi2131',
            phone: 947559709,
            birthday_date: "31/10/2000",
            country: "Perú"
        }
        const data = usersControllers.createUser(body)
        assert.equal(data.first_name, body.first_name)
        assert.equal(data.rol, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, '')
        done()
    })
    it('Should return nwe user when I sent correct data with optional inputs', (done) => {
        const body = {
            first_name: "Deysi",
            last_name: "Deysi Coello",
            email: "deysi@academlo.com",
            password: 'deysi2131',
            phone: 947559709,
            birthday_date: "31/10/2000",
            country: "Perú",
            profile_image: 'asd'
        }
        const data = usersControllers.createUser(body)
        assert.equal(data.first_name, body.first_name)
        assert.equal(data.rol, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, 'asd')
        done()
    })
    it('Should return the usr when I sent a correct ID', (done) => {
        const data  = usersControllers.getUserById('76133o21n3p21dNDOdOno1n2o1')
        
        assert.property(data, 'id')
        assert.property(data, 'email')
        assert.property(data, 'rol')
        assert.property(data, 'first_name')
        assert.property(data, 'last_name')
        assert.equal(data.rol, 'normal')
        assert.equal(data.email, 'rene@academlo.com')
        assert.equal(data.first_name, 'Rene')
        assert.property(data, 'is_active')
        assert.equal(data.is_active, true)
        assert.typeOf(data.is_active, 'boolean')
        
        done()
    })
    it('Should return an error when I sent an invalid ID', (done) => {
        const data  = usersControllers.getUserById('AS')
        
        assert.typeOf(data, 'boolean')
        assert.equal(data, false)
        
        done()
    })
})