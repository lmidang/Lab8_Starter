// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('Check if (234)582-3938 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(234)582-3938")).toBe(true);
});

test('Check if (234)591-8539 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(234)591-8539")).toBe(true);
});

test('Check if 23459328539 is not a valid phone number', () => {
    expect(functions.isPhoneNumber(23459328539)).toBe(false);
});

test('Check if 2345@$#9328539 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("2345@$#9328539")).toBe(false);
});

test('Check if yourname@gmail.com is an email', () => {
    expect(functions.isEmail("yourname@gmail.com")).toBe(true);
});

test('Check if yourface@exe.edu is an email', () => {
    expect(functions.isEmail("yourface@exe.edu")).toBe(true);
});

test('Check if so7e3#@exe.edu is not an email', () => {
    expect(functions.isEmail("so7e3#@exe.edu")).toBe(false);
});

test('Check if m3k2$#@exe.edu is not an email', () => {
    expect(functions.isEmail("m3k2$#@exe.edu")).toBe(false);
});

test('Check if asdfjkl is a strong password', () => {
    expect(functions.isStrongPassword("asdfjkl")).toBe(true);
});

test('Check if ABE8wd is a strong password', () => {
    expect(functions.isStrongPassword("ABE8wd")).toBe(true);
});

test('Check if ABE8 d# is not a strong password', () => {
    expect(functions.isStrongPassword("ABE8 d#")).toBe(false);
});

test('Check if 3d# is not a strong password', () => {
    expect(functions.isStrongPassword("3d#")).toBe(false);
});

test('Check if 12/20/5323 is a date', () => {
    expect(functions.isDate("12/20/5323")).toBe(true);
});

test('Check if 03/19/2933 is a date', () => {
    expect(functions.isDate("03/19/2933")).toBe(true);
});

test('Check if 03/39/2933 is not a date', () => {
    expect(functions.isDate("03/39/A33")).toBe(false);
});

test('Check if 23/39/ze933 is not a date', () => {
    expect(functions.isDate("23/39/ze933")).toBe(false);
});

test('Check if #123456 is a hex color', () => {
    expect(functions.isHexColor("#123456")).toBe(true);
});

test('Check if #E2A4E6 is a hex color', () => {
    expect(functions.isHexColor("#E2A4E6")).toBe(true);
});

test('Check if #E2A4E6wer isnt a hex color', () => {
    expect(functions.isHexColor("#E2A4E6wer")).toBe(false);
});

test('Check if # isnt a hex color', () => {
    expect(functions.isHexColor("#")).toBe(false);
});