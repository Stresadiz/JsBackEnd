const express = require('express');
const app = express();
const port = 3000;

app.get('/Home/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/status/', (req, res) => {
  res.json({
     status: "Online",
     message: "Server is running smoothly",
     user: "Admin"
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/Home`);
});