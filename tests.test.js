const capitalize = function (string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});

const reverse = function (string) {
  let reversed = '';
  Array.from(string).forEach(char => (reversed = char + reversed));
  return reversed;
};
test('reverse string', () => {
  expect(reverse('Iker')).toBe('rekI');
});

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

test('calculator', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.add(4, 5)).toBe(9);
  expect(calculator.subtract(6, 2)).toBe(4);
  expect(calculator.divide(10, 2)).toBe(5);
});

const cipher = function (string, shift) {
  let ciph = '';
  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);
    let char = String.fromCharCode(charCode + shift);
    if (charCode + shift > 122 || (charCode + shift > 90 && charCode + shift < 97)) {
      char = String.fromCharCode(charCode + shift - 26);
    }
    if ((charCode > 90 && charCode < 97) || charCode < 65 || charCode > 122) {
      char = string.charAt(i);
    }
    ciph += char;
  }
  return ciph;
};

test('caesar cipher', () => {
  expect(cipher('hello', 3)).toBe('khoor');
  expect(cipher('abcdefghijklmnopqrstuvwxyz', 4)).toBe('efghijklmnopqrstuvwxyzabcd');
  expect(cipher('Z', 3)).toBe('C');
  expect(cipher('hello, hello', 3)).toBe('khoor, khoor');
});

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

const analyze = function (array = []) {
  const average = array.reduce((prev, cur) => (prev += cur)) / array.length;
  const min = array.reduce((prev, cur) => (prev > cur ? (prev = cur) : prev));
  const max = array.reduce((prev, cur) => (prev < cur ? (prev = cur) : prev));
  return { average, min, max, length: array.length };
};

test('analyze array', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual(object);
});
