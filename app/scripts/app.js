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
         });

     }

    angular
        .module('Blocitoff', ['ui.router', 'firebase'])
        .config(config);
 })();
