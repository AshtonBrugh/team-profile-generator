const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Emilio', 50, 'emilio@gmail.com', 7);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Emilio', 50, 'emilio@gmail.com', 7);

    expect(manager.getRole()).toEqual('Manager');


})

