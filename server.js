// Imports the dependencies
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Stores in the app variable
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Turns on the server 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});