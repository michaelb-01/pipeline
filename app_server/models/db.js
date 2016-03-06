var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
  // live database (currently hosted on Heroku) for production
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

// MongoDB connection logs
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// Disconnect MongoDB
gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
  console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// application termination event listener for nodemon
// use process.once since nodemon is listening for this too
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// application termination standard event listener 
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});
// application termination event listener for Heroku
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

// emulate disconnection event for MongoDB on Windows
var readLine = require ("readline");
  if (process.platform === "win32"){
    var rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ("SIGINT", function (){
    process.emit ("SIGINT");
  });
}

require('./locations');


