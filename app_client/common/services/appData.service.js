(function() {

  // register the service with the app
  angular
    .module('app')
    .service('appData', appData);

  appData.$inject = ['$http'];
  function appData ($http) {
    var jobs = function () {
      return $http.get('/api/jobs');
    };

    var jobById = function (jobid) {
      return $http.get('/api/jobs/' + jobid);
    };

    var myTasks = function () {
      console.log('getting my tasks');
      return $http.get('/api/myTasks');
    };

    return {
      jobs : jobs,
      jobById: jobById,
      myTasks: myTasks
    };


  }

})();