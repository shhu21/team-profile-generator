const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com', 100);
  
    expect(manager.name).toBe('Dave');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual('Manager');
});