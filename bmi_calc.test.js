const { calculateBMI, bmiCategory } = require('./bmi_calc');


test('calculateBMI - Normal weight', () => {
    expect(calculateBMI(5, 7, 150).bmiValue).toBeCloseTo(24.06, 2);
  });
  
test('calculateBMI - Error handling', () => {
    expect(() => calculateBMI(5, 7, 'sixty')).toThrow(TypeError);
  });
  
test('calculateBMI - Zero values', () => {
    expect(() => calculateBMI(0, 0, 0)).toThrow(TypeError);
  });
  
test('bmiCategory - Underweight', () => {
  expect(bmiCategory(13.49)).toBe('Underweight');
});

test('bmiCategory - Boundary values', () => {
  expect(bmiCategory(18.5)).toBe('Normal weight');
  expect(bmiCategory(25)).toBe('Overweight');
});

test('bmiCategory - Incorrect category', () => {
  expect(bmiCategory(23.49)).not.toBe('Obese');
});
