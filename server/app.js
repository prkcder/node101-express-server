// import files and packages up here
const express = require("express");
const morgan = require("morgan");
const data = require("./data.json");

// create your express server below
const app = express();

// add your routes and middleware below

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/data", (req, res) => {
    res.send(data);
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// finally export the express application
module.exports = app;






// app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });
  
//   app.get("/data", (req, res) => {
//     res.json(data);
//   });

// 1) GET / responds with a 200 response code
//     2) GET /data responds with all top spots


// In order to respond to requests with the top spots data, you'll need to import the data.json file using require().

// Exit Criteria
// Server should respond to GET requests to / route the top spots page

// Server should respond with a status code of 200

// Server should log each request using morgan's dev format

// Server should indicate when it is listening and on which port

// Server should respond to GET requests to /data route with the top spots data

// All tests should pass