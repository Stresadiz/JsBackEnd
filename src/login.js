const User = require('../src/modules/User');
const {userAlreadyExists} = require('../src/auth')

function userLogin(username, password) {
    const userToLog = new User(null, username, password);
    
    return userAlreadyExists(userToLog);
}

module.exports = { userLogin };