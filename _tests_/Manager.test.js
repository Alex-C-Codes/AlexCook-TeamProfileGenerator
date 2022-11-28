const Manager = require('../lib/Manager');

test('Manager class should return type object', () => {
    var manager = new Manager();
    expect(typeof manager).toBe('object');
});

test('Manager getName() returns manager name', () => {
    var manager = new Manager('someName', '1', 'example@example.com', '23');
    expect(manager.getName()).toBe('someName');
});

test('Manager getId() returns manager id', () => {
    var manager = new Manager('someName', '1', 'example@example.com', '23');
    expect(manager.getId()).toBe('1');
});

test('Manager getOfficeNumber() returns manager email', () => {
    var manager = new Manager('someName', '1', 'example@example.com', '23');
    expect(manager.getOfficeNumber()).toBe('23');
});

test('Manager getRole() returns manager role', () => {
    var manager = new Manager('someName', '1', 'example@example.com', '23');
    expect(manager.getRole()).toBe('Manager');
});