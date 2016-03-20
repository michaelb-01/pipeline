var mongoose = require('mongoose');
var jobs = mongoose.model('jobs');

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
module.exports.getJobs = function(req, res) {
  console.log('get all jobs');
  jobs.find()
  .exec(function(err, jobs) {
    if (err) {
      return console.error(err);
    }
    else {
      sendJSONresponse(res, 200, jobs);
    }
  });
};

module.exports.getJob = function(req, res) {
  console.log('find single job by id: ' + req.params.jobid);
  jobs.findById(req.params.jobid)
  .exec(function(err, job) {
    if (err) {
      return console.error(err);
    }
    else {
      console.log(job);
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
