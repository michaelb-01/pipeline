var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  number: Number,   // incremental id for each job
  client: {type: String, required: true},   // e.g. BMW, Honda, Channel 4, Paloma Faith
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
});

/*
db.tba.save({
  number: 0001,
  client: "BMW",   
  agency: "Radical",   
  director: "Sebastien Strasse", 
  name: "X-world",     
  tag: "Commercial",      
  thumb: "bmw.jpg",    
  people: [
    {
      userId: 'kjg3y23riu3h32',
      firstName: 'Mike',
      lastName: 'Battcock'
    },
    {
      userId: 'kjhs2328d8h38d',
      firstName: 'Ben',
      lastName: 'Cantor'
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

var taskSchema = new mongoose.Schema({
  job: Number,        // jobId
  taskType: String,   // e.g. asset, shot, rnd
  taskName: String,   // e.g. wrecking ball
  discipline: String, // e.g. FX, modelling, texturing, comp etc.
  startDate: {
    type: Date,
    "default": Date.now
  },
  dueDate: Date,
  people: [{
    userId: Number,
    firstName: String,
    lastName: String}], // list of people working on the task
  status: {
    type: String,       // e.g. Unstarted, Active, Complete
    "default": "Active"
  },
  description: String,  // e.g. 'RnD to develop wrecking ball destruction system'
  frames: {
    workIn: Number,       // start frame to work from
    workOut: Number,      // end frame to work to
    cutIn: Number,        // start frame in edit
    cutOut: Number        // end frame in edit
  },
  camera: {
    name: String,    // e.g. arri alexa
    filmback: {
      width: Number,  // width and height of filmback in inches
      height: Number
    } 
  }, 
  lens: Number,         // focal length mm
  relatedTasks: [
    {
      taskId: Number
    }
  ]
})

mongoose.model('Jobs', jobSchema);