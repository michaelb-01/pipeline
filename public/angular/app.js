angular.module('app', ['ngAnimate']);

var appController = function ($scope, jobsData) {
  $scope.data = jobsData;
  $scope.filter = "Mike Battcock";
};

var jobsData = function ($http) {
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

var tasks = function ($scope) {
  $scope.tasks = taskData();
};

var taskData = function ($http) {
  return [{
      job: '5370a35f2536f6785f8dfb6b',
      taskId: '5370a35f2536f6785f8dfbFD3',
      taskType: 'Asset',
      taskName: 'Wrecking Ball',
      discipline: 'FX',
      startDate: '23/02/2016',
      dueDate: '18/03/2016',
      people: [
        {
          userId: '5370a35f2536f6785f8dsdf3242',
          firstName: 'Mike',
          lastName: 'Battcock'
        },
        {
          userId: '5370a35fsdf2346785f8dsdf3242',
          firstName: 'Ben',
          lastName: 'Cantor'
        }
      ],
      status: 'Active',
      description: 'RnD to develop destruction system with a wrecking ball',
      relatedTasks: [
        {
          taskId: '5370a35f2536f678dfs23ebFD3'
        }
      ]
    },
    {
      job: '5370a35f2536f6785f8dfb6b',
      taskId: '5370a35f2536f6785f8dfbFD3',
      taskType: 'Asset',
      taskName: 'Wrecking Ball',
      discipline: 'Model',
      startDate: '23/02/2016',
      dueDate: '18/03/2016',
      people: [
        {
          userId: '5370a35f2536f6785f8dsdf3242',
          firstName: 'Mike',
          lastName: 'Battcock'
        },
        {
          userId: '5370a35fsdf2346785f8dsdf3242',
          firstName: 'Ben',
          lastName: 'Cantor'
        }
      ],
      status: 'Active',
      description: 'RnD to develop destruction system with a wrecking ball',
      relatedTasks: [
        {
          taskId: '5370a35f2536f678dfs23ebFD3'
        }
      ]
    }];
};

var gridifier = function($scope) {

  $scope.initGridifier = function () {
    $(document).ready(function() {
        var grid = new Gridifier(".grid", {
            // class: "grid-item", // 'grid-item' class selector will by used by default
            filter: {
               // Optionally, set initial filter with "selected" setting;
               // "selected": "all", // 'all' filter will be selected by default

              "red": function(item) {
                    return $(item).hasClass("red-item");
               },

               "green": function(item) {
                    return $(item).hasClass("green-item");
               }
            }
        });
        // appendNew will collect all not connected items(1, 2) and append them to Gridifier
        grid.appendNew();
         
        // 'All' filter is available by default -> will show all grid items
        $(".filter-all").on("click", function() { grid.filter("all"); console.log('sdfdsf')});
        // Will show only red items
        $(".filter-red").on("click", function() { grid.filter("red"); });
        // Will show only green items
        $(".filter-green").on("click", function() { grid.filter("green"); });
    });
  }

  console.log('gridifier');

  $scope.initGridifier();
}

angular
  .module('app')
  .controller('appController', appController)
  .service('jobsData', jobsData)
/*
USER SCHEMA:

userId: {ObjectID, unique:true}
name: {
  first: String,
  last: String
}
role: String (3D Artist, Flame Artist) - maybe should be tags like 3D, FX, 2D, Nuke, Smoke etc.
jobs: [
  {name: String, jobId: Number, active: Boolean},
  {name: String, jobId: Number, active: Boolean}
]
tasks: [
  {jobId: Number, taskId, Number, active: Boolean},
  {jobId: Number, taskId, Number, active: Boolean}
]
*/

/*
JOB SCHEMA:

jobId: {ObjectID, unique:true},
client: String,
agency: String,
name: {
  main: String,
  tag: String
}
people: [
  userId: ObjectID,
  firstName: String,
  lastName: String
]
tasks: [
  {jobId: Number, taskId, Number, active: Boolean},
  {jobId: Number, taskId, Number, active: Boolean}
]
startDate: Date,
dueDate: Date
*/

/*
TASK SCHEMA:

job: ObjectID - jobId
taskId: ObjectID
taskType: String - Asset, Shot (RnD?)
taskName: String - Asset Name (e.g. 'wrecking ball'), shot number (sh0010))
discipline: String (FX, roto, comp, lighting)
startDate: Date,
dueDate, Date,
people: [
  userId: ObjectID,
  firstName: String,
  lastName: String
]
status: String,
versions: [
  versionId: ObjectID
]
description: String
relatedTasks: [
  taskId: ObjectID
]
*/
