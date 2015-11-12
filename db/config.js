var mongoose = require('mongoose');

// Change for deployment
mongoose.connect('mongodb://127.0.0.1');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'eonnection error:'));
db.once('open', function(cb) {
  console.log('connected');
});

module.exports = db;