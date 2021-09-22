const sum = require('../scripts/calculator');

describe('funçaõ bla', () => {
    it('Somar 4 e 5', () => {
        expect(sum(4, 5)).toBe(9);
        
    });
    it('somar 0 + 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('somar 3 + 5', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow();
    })
    it ('parameters must be numbers', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow(/parameters must be numbers/);
    })
})
