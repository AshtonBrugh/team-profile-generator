const Employee = require('../lib/Employee.js');

test("check to see if Employee is instantiated", ()=> {
    const newEmployee = new Employee('name');

    expect(typeof (newEmployee)).toBe("object");
    
});

test("")



