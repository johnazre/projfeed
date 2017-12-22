var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/indexRoutes'));
app.use('/schools', require('./routes/schoolsRoutes'));
app.use('/users', require('./routes/usersRoutes'));
app.use('/collections', require('./routes/collectionsRoutes'));
app.use('/projects', require('./routes/projectsRoutes'));
app.use('/feedbacks', require('./routes/feedbacksRoutes'));
app.use('/auth', require('./routes/authRoutes'));

app.listen(port, function() {
  console.log("listening on port: ", port);
})
