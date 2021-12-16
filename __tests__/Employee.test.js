const Employee = require('../lib/Employee.js');

test('creates an employee object', ()=> {
    const newEmployee = new Employee('Ashton', 12, 'ashtonbrugh@gmail.com');

    expect(newEmployee.name).toEqual(expect.any(String));
    expect(newEmployee.id).toEqual(expect.any(Number));
    expect(newEmployee.email).toEqual(expect.any(String));
    
});

test('gets employee name', () => {
    const newEmployee = new Employee('Ashton', 12, 'ashtonbrugh@gmail.com');

    expect(newEmployee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const newEmployee = new Employee('Ashton', 12, 'ashtonbrugh@gmail.com');

    expect(newEmployee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const newEmployee = new Employee('Ashton', 12, 'ashtonbrugh@gmail.com');

    expect(newEmployee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const newEmployee = new Employee('Ashton', 12, 'ashtonbrugh@gmail.com');

    expect(newEmployee.getRole()).toEqual('Employee');
})





