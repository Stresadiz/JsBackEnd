const { connectDB } = require('./database');
const bcrypt = require('bcrypt')
const saltRounds = 10;

async function registerUser(newUser) {
    const db = await connectDB();

    const isValid = verifyEmail(newUser.userEmail)

    if (isValid) {
        try {

            const hashedPass = await bcrypt.hash(newUser.userPass, saltRounds);

            await db.run(
                'INSERT INTO users (userEmail, userName, userPass) VALUES (?, ?, ?)',
                [newUser.userEmail, newUser.userName, hashedPass]
            );

            return true
        } catch (error) {
            return false    
        }
    }
    
    return false
}

function verifyEmail(mail) {
    return mail.includes("@")
}

async function userLogin(username, password) {
    const db = await connectDB();

    const user = await db.get(
        'SELECT * FROM users WHERE userName = ?',
        [username]
    );

    if (user) {
        const match = await bcrypt.compare(password, user.userPass)
        return match
    }
    
    return false
}

module.exports = { registerUser, userLogin}