const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com', 100);
  
    expect(manager.getName()).toEqual('Dave');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toEqual('dave@gmail.com');
    expect(manager.getOfficeNumber()).toEqual(100);
    expect(manager.getRole()).toEqual('Manager');
});