let users = [
    {
        "userEmail": "mail@admin.com",
        "userName":"admin",
        "userPass":"admin123"
    }
]

function registerUser(newUser) {
    let mailVerified = verifyEmail(newUser.userEmail)
    let userNotExist = !userAlreadyExists(newUser)

    if (mailVerified && userNotExist) {
        
        users.push(newUser)    
        return true

    } else{

        return false
    }
}

function userAlreadyExists(newUser) {

    return users.some(usr => newUser.userName === usr.userName &&
         newUser.userPass === usr.userPass);
}

function verifyEmail(userEmail) {

    return userEmail.includes("@")
}


module.exports = { registerUser, userAlreadyExists, verifyEmail }