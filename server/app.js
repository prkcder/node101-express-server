// import files and packages up here


// create your express server below
let express = require("express");
let app = express();


// add your routes and middleware below
    app.get('/', function(req, res) {
        res.send('Hello World!');
      });
      
      app.listen(3000, function() {
        console.log('Example app listening on port 3000!');
      });

// finally export the express application
module.exports = app;
