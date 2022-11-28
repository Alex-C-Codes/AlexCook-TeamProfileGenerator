const Engineer = require('../lib/Engineer');

test('Engineer class returns object type', () => {
    var engineer = new Engineer();
    expect(typeof engineer).toBe('object');
});

test('Engineer getName() returns engineer name', () => {
    var engineer = new Engineer('someName', '1', 'example@example.com', 'gitHubName');
    expect(engineer.getName()).toBe('someName');
});

test('Engineer getId() returns engineer id', () => {
    var engineer = new Engineer('someName', '1', 'example@example.com', 'gitHubName');
    expect(engineer.getId()).toBe('1');
});

test('Engineer getEmail() returns engineer email', () => {
    var engineer = new Engineer('someName', '1', 'example@example.com', 'gitHubName');
    expect(engineer.getEmail()).toBe('example@example.com');
});

test('Engineer getGitHub() returns engineer gitHub', () => {
    var engineer = new Engineer('someName', '1', 'example@example.com', 'gitHubName');
    expect(engineer.getGitHub()).toBe('gitHubName');
});

test('Engineer getRole() returns engineer role', () => {
    var engineer = new Engineer('someName', '1', 'example@example.com', 'gitHubName');
    expect(engineer.getRole()).toBe('Engineer');
});