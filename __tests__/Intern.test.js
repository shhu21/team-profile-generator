const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'school');
  
    expect(intern.name).toBe('Dave');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual('Intern');
});