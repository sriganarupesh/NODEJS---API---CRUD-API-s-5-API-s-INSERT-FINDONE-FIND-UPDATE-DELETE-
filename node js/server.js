const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Setup server port

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/db.config.js');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

// Define a root/default route
app.get('/', (req, res) => {
    res.json({"message": "Hello World Chalapathi"});
});

// Require User routes
const userRoutes = require('./src/routes/user.routes.js');
app.use('/api/users', userRoutes);

// Require Department routes
const departmentRoutes = require('./src/routes/dept.routes.js'); // Renamed file for clarity
app.use('/api/departments', departmentRoutes);

// Join route should not overlap with other routes

// Listen for requests
app.listen(4600, () => {
    console.log(`Node server is listening on port `);
});