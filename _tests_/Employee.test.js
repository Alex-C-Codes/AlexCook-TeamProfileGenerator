const Employee = require('../lib/Employee');

test('Employee class returns object type', () => {
    var employee = new Employee();
    expect(typeof employee).toBe('object');
});

test('Employee getName() returns employee name', () => {
    var employee = new Employee('someName', '1', 'example@example.com');
    expect(employee.getName()).toBe('someName');
});

test('Employee getId() returns employee id', () => {
    var employee = new Employee('someName', '1', 'example@example.com');
    expect(employee.getId()).toBe('1');
});

test('Employee getEmail() returns employee email', () => {
    var employee = new Employee('someName', '1', 'example@example.com');
    expect(employee.getEmail()).toBe('example@example.com');
});

test('Employee getRole() returns employee role', () => {
    var employee = new Employee('someName', '1', 'example@example.com');
    expect(employee.getRole()).toBe('Employee');
});