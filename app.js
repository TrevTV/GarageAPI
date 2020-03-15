var express = require('express');
var app = express();
var port = process.env.PORT || 5050;
var bodyParser = require('body-parser');  

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'))

var openController = require('./controller/api/openController')();
var closeController = require('./controller/api/closeController')();
var imgController = require('./controller/api/imgController')();
var mainController = require('./controller/api/mainController')();

var indexController = require('./controller/indexController')();

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  

app.use("/api/open", openController);
app.use("/api/close", closeController);
app.use("/api/img", imgController);
app.use("/api", mainController);
app.use("/", indexController)

app.listen(port, function() {
  var datetime = new Date();
  var message = "Server running on port " + port + ". Started at " + datetime;
  console.log(message);
});