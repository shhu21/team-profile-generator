const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'github.com');
  
    expect(engineer.name).toEqual('Dave');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('dave@gmail.com');
    expect(engineer.github).toEqual('github.com');
    expect(engineer.getRole()).toEqual('Engineer');
});