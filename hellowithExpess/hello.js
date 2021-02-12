// Import the top-level function of express
const express = require('express');

// Creates an Express application using the top-level function
const app = express();

// Define port number as 3000
const port = 3000;

//Routes HTTP GET requests to the specified path "/" with the specified callback funtion
app.get('/',function(request,response) {
    response.send('Hello, World! this is Amazing');
});

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
})