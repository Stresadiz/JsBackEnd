const {userLogin, registerUser} = require('../auth');
const User = require('../modules/User');
let rndNum = Math.floor(Math.random() * 100) + 1;

test('Login con credenciales incorrectas', async () => {
    const result = await userLogin('admin123', 'admin1sdsd23');
    expect(result).toBe(false);
}, 10000);

test('Login con credenciales incorrectas, solo en usuario', async () => {
    const user = new User(null, 'admin123', 'admin1sdsd23')
    const result = await userLogin('admin', 'wrongpassword');
    expect(result).toBe(false);
}, 10000);

test('Registro con credenciales incorrectas', async () => {
    const newUser = new User('maildeprueba', 'admin2', 'admin1233');
    const result = await registerUser(newUser);
    expect(result).toBe(false);
}, 10000);

test('Registro con credenciales correctas', async () => {
    const newUser = new User('maildeprueb' + rndNum + '@gmail.com', 'admin' + rndNum, 'admin123' + rndNum);
    const result = await registerUser(newUser);
    expect(result).toBe(true);
}, 10000);

test('Login con credenciales correctas', async () => {
    const result = await userLogin('admin' + rndNum, 'admin123' + rndNum);
    expect(result).toBe(true);
}, 10000);

