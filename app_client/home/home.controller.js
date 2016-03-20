(function() {

/*
  var jobsData = function ($http) {
    $http.get('/api/jobs').
      success(function(data) {
        return data;
    });

    
    return [{
        name: 'BMW',
        client: 'BMW',
        tag: 'Advert',
        thumb: 'bmw.jpg',
        agency: 'Radical',
        people: [
          'Mike Battcock',
          'Ben Cantor',
          'Sam Osborne'
        ],
        _id: '5370a35f2536f6785f8dfb6a'
      },
      {
        name: 'Jenna',
        client: 'BMW',
        tag: 'Advert',
        thumb: 'willYoung.jpg',
        agency: 'Radical',
        people: [
          'Mike Battcock',
          'Ben Cantor',
          'Sam Osborne'
        ],
        _id: '5370a35f2536f6785f8dfb6a'
      },
      {
        name: 'War and Peace',
        client: 'Channel 4',
        tag: 'TV',
        thumb: 'warAndPeace.jpg',
        agency: '4Creative',
        people: [
          'Chris Wood',
          'James Mann',
          'Ben Cantor'
        ],
        _id: '5370a35f2536f6785f8dfb6b'
      },
      {
        name: 'Will Young',
        client: 'Will Young',
        tag: 'Music Video',
        thumb: 'willYoung.jpg',
        agency: 'Stink',
        people: [
          'Matt Shires',
          'Mike Skrgatic',
          'James Allen'
        ],
        _id: '5370a35f2536f6785f8dfb6c'
      }];
      
  };

*/

  angular
    .module('app')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl ($rootScope, appData) {
    var vm = this;
    //vm.filter = "Mike Battcock";

    var getJobs = function() {
      appData.jobs().success(function(jobs) {
        vm.jobs = jobs;
          console.log('found some jobs');
        })
        .error(function (err) {
          console.log('could not retrieve jobs');
        });
    };

    getJobs();
  }



})();
