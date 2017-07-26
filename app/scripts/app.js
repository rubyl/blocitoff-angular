(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
         });

         $stateProvider
            .state('tasks', {
            url: '/',
            controller: 'TaskCtrl as task',
            templateUrl: '/templates/task.html'
         })

         .state('taskhistory', {
            url: '/taskhistory',
            controller: "TaskCtrl as taskhistory",
            templateUrl: '/templates/taskhistory.html'
        });

     }

    angular
        .module('Blocitoff', ['ui.router', 'firebase'])
        .config(config);
 })();
