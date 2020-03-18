const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const user = require('./user');

// connect to mysql server

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'customer',
    password: 'password',
    database: 'CUSTOMER'
})

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(user(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

