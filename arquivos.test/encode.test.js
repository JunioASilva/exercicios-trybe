const encode = require('../scripts/encode');

describe('Testando a função encode', () => {
    it('Testando se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    })
    it('teste se a é igual a 1', () => {
        expect(encode('a')).toEqual('1')
    })
    it('teste se e é igual a 2', () => {
        expect(encode('e')).toEqual('2')
    })
    it('teste se i é igual a 3', () => {
        expect(encode('i')).toEqual('3')
    })
    it('teste se o é igual a 4', () => {
        expect(encode('o')).toEqual('4')
    })
    it('teste se u é igual a 5', () => {
        expect(encode('u')).toEqual('5')
    })  
    it('teste se é o mesmo numero de caracteres', () => {
        expect(encode('trybeee').length).toEqual(7);
    })
})