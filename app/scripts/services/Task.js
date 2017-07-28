(function() {
    function Task($firebaseArray) {
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);

        var confirmCompleted = function (task) {
          task.completed = true;
          tasks.$save(task)
        }

        return {
            all: tasks,
            completeTask: confirmCompleted,
        };
    }

  angular
    .module('Blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
