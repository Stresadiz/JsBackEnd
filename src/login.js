userAdmin = {
    username: 'admin',
    password: 'admin123'
};

function userLogin(username, password) {
    if (username == userAdmin.username && password == userAdmin.password) {
        return true;
    }
    return false;
}

module.exports = { userLogin };