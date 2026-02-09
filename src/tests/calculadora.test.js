const { apliDiscount} = require('../calculadora');

test('Descrontar 10% de 100', () => {
    const result = apliDiscount(100, 10);
    expect(result).toBe(90);
});

test('Descrontar 20% de 200', () => {
    const result = apliDiscount(200, 20);
    expect(result).toBe(160);
});

test('Descontar un valor negativo', () => {
    const result = apliDiscount(100, -10);
    expect(result).toBe(100);
});