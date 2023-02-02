const intern= require('./lib/intern');
const intern= new intern('Dick Grayson ', '124', 'nightwing@gmail.com', 'the robin school')


test('testing the constructer values', () => {
excpect(intern.name).toBe('Dick Grayson' );
excpect(intern.id).toBe('124' );
excpect(intern.email).toBe('nightwing@gmail.com' );
excpect(intern.school).toBe('the robin school' );
});

test('testing get name method', () => {
    excpect(intern.getName()).toBe('Dick Grayson' );
});

test('testing get id method', () => {
    excpect(intern.getId()).toBe('124');
})

test('testing get email method', () => {
    excpect(intern.getEmail()).toBe('nightwing@gmail.com');
})

test('testing get school method', () => {
    excpect(intern.getSchool()).toBe('the robin school');
})