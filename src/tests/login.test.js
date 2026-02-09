const {userLogin} = require('../login');

test('Login con credenciales correctas', () => {
    const result = userLogin('admin', 'admin123');
    expect(result).toBe(true);
});

test('Login con credenciales incorrectas', () => {
    const result = userLogin('tests', 'wrongpassword');
    expect(result).toBe(false);
});

test('Login con credenciales incorrectas, solo en usuario', () => {
    const result = userLogin('admin', 'wrongpassword');
    expect(result).toBe(false);
});