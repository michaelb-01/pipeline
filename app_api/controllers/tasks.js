var mongoose = require('mongoose');
var tasks = mongoose.model('tasks');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* save test 
var job = new jobs({name: 'Master test'});

job.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(job);
});

jobs.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});
*/

/* GET jobs */
module.exports.mytasks = function(req, res) {
  console.log('get my tasks');
  tasks.find({'people.lastName' : 'Battcock'})
  .exec(function(err, myTasks) {
    if (err) {
      return console.error(err);
    }
    else {
      console.log(myTasks)
      sendJSONresponse(res, 200, myTasks);
    }
  });
};

module.exports.jobTasks = function(req, res) {
  console.log('get job tasks');
  console.log(req.params);
  tasks.find({'job': '56ea3ee0de6979549c9302ca'})
  .exec(function(err, tasks) {
    if (err) {
      return console.error(err);
    }
    else {
      sendJSONresponse(res, 200, tasks);
    }
  });
};

module.exports.getJob = function(req, res) {
  console.log('find single job by id');
  jobs.findById(req.params.jobid)
  .exec(function(err, job) {
    if (err) {
      return console.error(err);
    }
    else {
      sendJSONresponse(res, 200, job);
    }
  });
};

module.exports.createJob = function(req, res) {
  jobs.find(function (err, todos) {
    if (err) {
      return console.error(err);
    }
    console.log(todos)
  });
};
