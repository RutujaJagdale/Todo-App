const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const { specs, swaggerUi } = require('./swagger');
const db = require('./config/database');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use (cors())

// MongoDB connection (using the exported db connection)
// db.on('error', (error) => console.error(error));
// db.once('open', () => {
//   console.log('Connected to Database');

  // Path for all Routes
  app.use('/', todoRoutes); // Change this to '/' if want to access the API at http://localhost:3000/todoweb

  // Swagger setup
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });



