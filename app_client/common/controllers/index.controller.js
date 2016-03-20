(function() {
  angular
    .module('app')
    .controller('indexCtrl', indexCtrl);

  function indexCtrl ($scope, appData) {

    var getMyTasks = function() {
      appData.myTasks().success(function(myTasks) {
        $scope.myTasks = myTasks;
          console.log('found ' + myTasks.length + ' myTasks');

        })
        .error(function (err) {
          console.log('could not retrieve myTasks');
        });
    };

    $scope.tasksToggle = "";

    $scope.toggleMyTasks = function() {
      if ($scope.tasksToggle == "") {
        $scope.tasksToggle = "toggled";
      }
      else {
        $scope.tasksToggle = "";
      }
    }

    getMyTasks();
  }
})();
