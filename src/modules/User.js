class User {
    userEmail = "";
    userName = "";
    userPass = "";

    constructor(userEmail, userName, userPass) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPass = userPass;
    }
}

module.exports = User;