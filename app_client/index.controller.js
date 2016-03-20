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

    $scope.navHide = "";

    $scope.navToggle = function() {
      if ($scope.navHide == "") {
        $scope.navHide = "navHide";
        console.log('hide nav');
      }
      else {
        $scope.navHide = "";
        console.log('show nav');
      }
    }

    getMyTasks();
  }
})();
