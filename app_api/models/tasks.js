var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  job: String,        // jobId
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
}, { collection: 'tasks' });  // force name so Mongoose doesn't add an 's' on the end

/*
db.tasks.save({
  job: '56ea3ee0de6979549c9302ca',
  taskType: 'Asset',   
  taskName: 'Wrecking Ball',   
  discipline: 'FX', 
  startDate: new Date('Sep 04, 1927'),
  dueDate: new Date('Sep 04, 1927'),
  people: [{
    userId: 12314353,
    firstName: 'Mike',
    lastName: 'Battcock'}], 
  status: "Active",
  description: 'RnD to develop wrecking ball destruction system',  
  frames: {
    workIn: 1001,
    workOut: 1053,      
    cutIn: 990,        
    cutOut: 1073        
  },
  camera: {
    name: 'Arri Alexa',    
    filmback: {
      width: 0.95,  
      height: 0.54
    } 
  }, 
  lens: 35,
  relatedTasks: [
    {
      taskId: 12843509
    }
  ]
})
*/

mongoose.model('tasks', taskSchema);