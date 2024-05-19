const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pa12199847',
  database: 'Users'
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/registrationPage.html');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO Data (Username, Email, Password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) throw err;

    res.send('User registered successfully');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});