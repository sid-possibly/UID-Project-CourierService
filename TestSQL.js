const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pa12199847',
  database: 'Users'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database successfully.');
    connection.end();
  }
});