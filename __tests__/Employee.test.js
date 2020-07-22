const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});