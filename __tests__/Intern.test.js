const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'school');
  
    expect(intern.name).toEqual('Dave');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('dave@gmail.com');
    expect(intern.getSchool()).toEqual('school');
    expect(intern.getRole()).toEqual('Intern');
});