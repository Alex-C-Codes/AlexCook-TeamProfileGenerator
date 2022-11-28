const Intern = require('../lib/Intern');

test('Intern class should return type object', () => {
    var intern = new Intern();
    expect(typeof intern).toBe('object');
});

test('Intern getName() returns intern name', () => {
    var intern = new Intern('someName', '1', 'example@example.com', 'GA-Tech');
    expect(intern.getName()).toBe('someName');
});

test('Intern getId() returns intern id', () => {
    var intern = new Intern('someName', '1', 'example@example.com', 'GA-Tech');
    expect(intern.getId()).toBe('1');
});

test('Intern getSchool() returns intern email', () => {
    var intern = new Intern('someName', '1', 'example@example.com', 'GA-Tech');
    expect(intern.getSchool()).toBe('GA-Tech');
});

test('Intern getRole() returns intern role', () => {
    var intern = new Intern('someName', '1', 'example@example.com', 'GA-Tech');
    expect(intern.getRole()).toBe('Intern');
});