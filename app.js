var express = require('express');
var path = require('path');
var favicon = require('favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

let index = require('./routes/index');
let admin = require('./routes/admin');
let reservations = require('./routes/reservations');


const auth = require('./lib/middleware/auth.js');


const configurations = {}







if (1) {
  
}


var app = express();

