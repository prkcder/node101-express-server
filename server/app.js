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
    res.json(data);
});

// finally export the express application
module.exports = app;
