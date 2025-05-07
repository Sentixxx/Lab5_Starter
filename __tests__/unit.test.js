// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('isPhoneNumber: valid 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: valid 456-7890', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('isPhoneNumber: invalid 1234567', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
});
test('isPhoneNumber: invalid 1234-567-890', () => {
  expect(isPhoneNumber('1234-567-890')).toBe(false);
});

// isEmail
test('isEmail: valid senticx@gmail.com', () => {
  expect(isEmail('senticx@gmail.com')).toBe(true);
});
test('isEmail: valid senticx_123@gmail.com', () => {
  expect(isEmail('senticx_123@gmail.com')).toBe(true);
});
test('isEmail: invalid senticx@', () => {
  expect(isEmail('senticx@')).toBe(false);
});
test('isEmail: invalid senticx@gmailcom', () => {
  expect(isEmail('senticx@gmailcom')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: valid Aabc', () => {
  expect(isStrongPassword('Aabc')).toBe(true);
});
test('isStrongPassword: valid A_123a', () => {
  expect(isStrongPassword('A_123a')).toBe(true);
});
test('isStrongPassword: invalid 1abc', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('isStrongPassword: invalid Ab', () => {
  expect(isStrongPassword('Ab')).toBe(false);
});

// isDate
test('isDate: valid 01/01/2025', () => {
  expect(isDate('01/01/2025')).toBe(true);
});
test('isDate: valid 1/1/2025', () => {
  expect(isDate('1/1/2025')).toBe(true);
});
test('isDate: invalid 1-1-2025', () => {
  expect(isDate('1-1-2025')).toBe(false);
});
test('isDate: invalid 000', () => {
  expect(isDate('000')).toBe(false);
});

// isHexColor
test('isHexColor: valid #000', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('isHexColor: valid 123456', () => {
  expect(isHexColor('123456')).toBe(true);
});
test('isHexColor: invalid 12345G', () => {
  expect(isHexColor('12345G')).toBe(false);
});
test('isHexColor: invalid #1234', () => {
  expect(isHexColor('#1234')).toBe(false);
});
