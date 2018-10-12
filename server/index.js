var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname + '/../dist/rdr2-streams'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 7200;

app.listen(port, function () {
    console.log("Now listening to port number:", port);
})