//Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var applicationRoutes = require('./routes/applicationRoutes');
var fs = require('fs');


//Configure Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(cors());

//Use External Routes
app.use('/ttt', applicationRoutes);

//Start the Server
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });