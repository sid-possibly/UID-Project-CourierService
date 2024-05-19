const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML files
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './Main_Track.html'));
});

// Handle the form submission
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Connect to the MySQL database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pa12199847',
    database: 'Users'
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
      res.status(500).send('Error connecting to database');
      return;
    }

    // Query the database for the user
    const query = `SELECT * FROM Data WHERE Email =? AND Password =?`;
    connection.query(query, [email, password], (error, results, fields) => {
      connection.end();

      if (error) {
        console.error('Error querying database:', error);
        res.status(500).send('Error querying database');
        return;
      }

      if (results.length > 0) {
        res.status(200).send('User found');
      } else {
        res.status(404).send('User not found');
      }
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});