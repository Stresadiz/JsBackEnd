const {registerUser, verifyEmail, userAlreadyExists} = require('../auth')
const User = require('../modules/User')

test('Creacion de nuevo usuario', () => {
    const newUser = new User('userEmail@gmail.com', 'Jhon Doe', 'userPass');
    
    const result = registerUser(newUser)

    expect(result).toBe(true);
});

test('Recuperar mismo usuario', () => {
    const newUser = new User('userEmail@gmail.com', 'Jhon Doe', 'userPass');

    const result = userAlreadyExists(newUser);

    expect(result).toBe(true)
});

test('Crear usuario con mail valido', () => {
    const newUser = new User('userEmail@gmail.com', 'Jhon Doe', 'userPass');
    
    const mailIsValid = verifyEmail(newUser.userEmail);

    expect(mailIsValid).toBe(true);
});

test('Crear usuario con mail invalido', () => {
    const newUser = new User('userEmail', 'Jhon Doe', 'userPass');
    
    const mailIsValid = verifyEmail(newUser.userEmail);

    expect(mailIsValid).toBe(false);
});