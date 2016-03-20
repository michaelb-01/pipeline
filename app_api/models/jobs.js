var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  number: Number,   // incremental id for each job
  client: String,   // e.g. BMW, Honda, Channel 4, Paloma Faith
  agency: String,   // e.g. Radical, Stink, Tony Petersen etc.
  director: String, // e.g. Sebastien Strasse
  name: String,     // e.g. (Audi) Mechanics, (BMW) X-world
  tag: String,      // Commercial, TV Series, Music Video etc.
  thumb: String,    // url of thumbnail image  
  people: [{
    userId: Number,
    firstName: String,
    lastName: String}], // list of people working on the Job
  status: {
    type: String,   // e.g. Unstarted, Active, Complete
    "default": "Active"
  },
  camera: {
    name: String,    // e.g. arri alexa
    filmback: {
      width: Number,  // width and height of filmback in inches
      height: Number
    } 
  },  
  startDate: {
    type: Date,
    "default": Date.now
  },
  dueDate: Date
}, { collection: 'jobs' });  // force name so Mongoose doesn't add an 's' on the end

/*
db.jobs.save({
  number: 0001,
  client: "WWF",   
  agency: "Stink",   
  director: "Some Guy", 
  name: "Will Young",     
  tag: "Music Video",      
  thumb: "willYoung.jpg",    
  people: [
    {
      userId: 'kjg3y23riu3h32',
      firstName: 'James',
      lastName: 'Allen'
    },
    {
      userId: 'kjhs2328d8h38d',
      firstName: 'Mike',
      lastName: 'Skrgatic'
    },
    {
      userId: 'sdfjh2382398',
      firstName: 'Chris',
      lastName: 'Wood'
    }
  ], 
  status: "Active",
  camera: {
    name: "Arri Alexa",    
    filmback: {
      width: "0.95",  
      height: '0.46'
    } 
  },  
  startDate: Date.now(),
  dueDate: new Date('Sep 04, 1927')
});
*/

mongoose.model('jobs', jobSchema);