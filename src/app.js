const express = require('express');
const { login } = require('./login');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/login', (req, res) => {
  const {username, password} = req.body;

  const isValid = login(username, password);

  if (isValid) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ mensaje: "Credenciales inválidas", status: "error" });  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});