(function() {

  angular.module('app', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/jobs/:jobid', {
        templateUrl: '/job/job.view.html',
        controller: 'jobCtrl',
        controllerAs: 'vm'
      })
      .when('/tasks', {
        templateUrl: '/tasks/tasks.view.html',
        controller: 'tasksCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  angular
    .module('app')
    .config(['$routeProvider', '$locationProvider', config]);

})();

