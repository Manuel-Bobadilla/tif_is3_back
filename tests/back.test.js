import { incrementar, decrementar } from "../src/controllers/contador.controller.js";

test('Sumando al contador', () => {
    expect(incrementar(0)).toBe(1);
    expect(incrementar(1)).toBe(2);
    expect(incrementar(-1)).toBe(0);
    expect(incrementar(-2)).toBe(-1);
});

test('Restando al contador', () => {
    expect(decrementar(0)).toBe(-1);
    expect(decrementar(-1)).toBe(-2);
    expect(decrementar(1)).toBe(0);
    expect(decrementar(2)).toBe(1);
});