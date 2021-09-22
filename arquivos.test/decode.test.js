const decode = require ('../scripts/decode');

describe('testes na função decode', () => {
    it('teste se decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    })
    it('teste se 1 é igual a', () => {
        expect(decode('1')).toEqual('a');
    })
    it('teste se 2 é igual a b', () => {
        expect(decode('2')).toEqual('e');
    })
    it('teste se 3 é igual a i', () => {
        expect(decode('3')).toEqual('i');
    })
    it('teste se 4 é igual a o', () => {
        expect(decode('4')).toEqual('o');
    })
    it('teste se 5 é igual a u', () => {
        expect(decode('5')).toEqual('u');
    })
    it('teste se é o mesmo numero de caracteres', () => {
        expect(decode('trybeee').length).toEqual(7);
    })
})



