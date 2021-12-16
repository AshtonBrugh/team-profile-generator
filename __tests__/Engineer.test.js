const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Tina', 90, 'tina@gmail.com', 'tinahub');

    expect(engineer.github).toEqual(expect.any(String));

});

test('get engineer github', () => {
    const engineer = new Engineer('Tina', 90, 'tina@gmail.com', 'tinahub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get engineer role', () => {
    const engineer = new Engineer('Tina', 90, 'tina@gmail.com', 'tinahub');

    expect(engineer.getRole()).toEqual('Engineer');
})

