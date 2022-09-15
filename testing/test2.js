const { assert } = require("chai")
const { it, describe } = require("mocha")

const sum = (a, b) => {
    const newA = Number(a)
    const newB =Number(b)
    if(newA !== a || newB !== b){
        return'error'
    } else{
        return a + b
    }
}

describe('Test nitario de mis usuarios', () => {
    it('Deberia retornar 8', (done) => {
        const myFunctionEjectuc = sum(6, 2)
        assert.equal(myFunctionEjectuc, 8, 'Ups no es 8')
        done()
    })
    it('Deberia retornar 25', (done) => {
        const myFunctionEjectuc = sum(15, 10)
        assert.equal(myFunctionEjectuc, 25, 'Ups no es 25')
        done()
    })
    it('Deberia retornar -8', (done) => {
        const myFunctionEjectuc = sum(-6, -2)
        assert.equal(myFunctionEjectuc, -8, 'Ups no es -8')
        done()
    })
    it('Deberia retornar un error cuandos e manda un string', (done) => {
        const myFunctionEjectuc = sum(6, 'hola')
        assert.equal(myFunctionEjectuc, 'error', 'Ups no es eroor')
        done()
    })
})