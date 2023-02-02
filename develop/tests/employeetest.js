const employee= require('./lib/employee');
const employee= new employee('Bruce Wayne ', '125', 'imnotbatman@gmail.com', )


test('testing the constructer values', () => {
excpect(employee.name).toBe('Bruce Wayne' );
excpect(employee.id).toBe('125' );
excpect(employee.email).toBe('imnotbatman@gmail.com' );

});

test('testing get name method', () => {
    excpect(employee.getName()).toBe('Bruce Wayne' );
});

test('testing get id method', () => {
    excpect(employee.getId()).toBe('125');
})

test('testing get email method', () => {
    excpect(employee.getEmail()).toBe('imnotbatman@gmail.com');
})

