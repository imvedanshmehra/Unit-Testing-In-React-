import { multiply, inLoweCase } from './HelperFn';

test('multiply', () => {
  expect(multiply(5, 2)).toBe(10);
});

test('inLowerCase', () => {
  expect(inLoweCase('VED')).toBe('ved');
});
