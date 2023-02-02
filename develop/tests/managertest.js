const manager= require('./lib/manager');
const manager= new manager('Clark Kent ', '123', 'imnotsuperman@gmail.com', '616')


test('testing the constructer values', () => {
excpect(manager.name).toBe('Clark Kent' );
excpect(manager.id).toBe('123' );
excpect(manager.email).toBe('imnotsuperman@gmail.com' );
excpect(manager.officeNumber).toBe('616' );
});

test('testing get name method', () => {
    excpect(manager.getName()).toBe('Clark Kent' );
});

test('testing get id method', () => {
    excpect(manager.getId()).toBe('123');
})

test('testing get email method', () => {
    excpect(manager.getEmail()).toBe('imnotsuperman@gmail.com');
})

test('testing get office number method', () => {
    excpect(manager.getOfficeNumber()).toBe('616');
})