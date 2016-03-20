(function() {

  // register the service with the app
  angular
    .module('app')
    .service('jobsData', jobsData);

  jobsData.$inject = ['$http'];
  function jobsData ($http) {
    var jobs = function () {
      return $http.get('/api/jobs');
    };

    var jobById = function ($http, jobid) {
      return $http.get('/api/jobs/' + jobid);
    };

    return {
      jobs : jobs,
      jobById: jobById
    };
  }

})();