const engineer= require('./lib/engineer');
const engineer= new engineer('Bruce Wayne ', '125', 'imnotbatman@gmail.com', 'batmansux')


test('testing the constructer values', () => {
excpect(engineer.name).toBe('Bruce Wayne' );
excpect(engineer.id).toBe('125' );
excpect(engineer.email).toBe('imnotbatman@gmail.com' );
excpect(engineer.github).toBe('batmansux' );
});

test('testing get name method', () => {
    excpect(engineer.getName()).toBe('Bruce Wayne' );
});

test('testing get id method', () => {
    excpect(engineer.getId()).toBe('125');
})

test('testing get email method', () => {
    excpect(engineer.getEmail()).toBe('imnotbatman@gmail.com');
})

test('testing get github usernmane method', () => {
    excpect(engineer.getOfficeGithubUsername()).toBe('batmansux');
})