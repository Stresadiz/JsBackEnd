const express = require('express');
const { userLogin } = require('./login');

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

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});