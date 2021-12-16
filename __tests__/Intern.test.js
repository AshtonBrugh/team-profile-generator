const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Stanley', 2, 'stanley@yahoo.com', 'UNC');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Stanley', 2, 'stanley@yahoo.com', 'UNC');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get intern role', () => {
    const intern = new Intern('Stanley', 2, 'stanley@yahoo.com', 'UNC');

    expect(intern.getRole()).toEqual('Intern');
})