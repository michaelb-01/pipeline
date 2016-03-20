(function() {
  angular
    .module('app')
    .controller('jobCtrl', jobCtrl);

  function jobCtrl ($routeParams, appData) {
    var vm = this;
    vm.jobid = $routeParams.jobid;

    console.log('Job controller: jobid: ' + vm.jobid);

    var getJob = function() {
        appData.jobById(vm.jobid).success(function(data) {
          vm.job = data;
          console.log(vm.job);
          console.log('found some data');
        })
        .error(function (err) {
          console.log('could not retrieve data');
        });
    };

    getJob();
  }
})();
