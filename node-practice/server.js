// Import the express module to be used in this application.
const express = require('express');

// Create an instance of the express application.
const app = express();

// Define a constant for the port number on which the server will run.
const PORT = 3000;

// Define a route for the root path ("/"). When a GET request is made to the root path, 
// the server will respond with "Hello, World!".
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server on the defined port. Once the server starts running, 
// a log will be printed to the console indicating the address of the server.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
