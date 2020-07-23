const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');
  
    expect(employee.name).toEqual('Dave');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('dave@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});