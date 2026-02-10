const express = require('express');
const { userLogin } = require('./login');
const { registerUser } = require('./auth');
const User = require('../src/modules/User')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/login', (req, res) => {
  const {username, password} = req.body;

  const isValid = userLogin(username, password);

  if (isValid) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: "Credenciales inválidas", status: "error" });  }
});

app.post('/api/auth', (req, res) => {
  const {email, username, password} = req.body;
  const newUser = new User(email, username, password);

  const isValid = registerUser(newUser);

  if (isValid) {
    res.json({ message: 'New user registered successful' });
  } else {
    res.status(401).json({ message: "Error al crear usuario", status: "error" });  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});