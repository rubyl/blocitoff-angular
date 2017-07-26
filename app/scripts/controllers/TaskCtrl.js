(function () {
    function TaskCtrl(Task) {
        this.taskData = Task.all;

        this.addTask = function () {
          if (this.text) {
            this.taskData.$add({
              text: this.text,
              completed: false,
              timestamp: Date.now()
            });
            this.text = '';
          }
        };

        this.expiredTask = function (timestamp) {
          if (timestamp < Date.now() - 604800000) {
            return true;
          }
        }

        this.completedTask = function (task) {
          if (task === true) {
            return true;
          }
        }
    }

    angular
        .module('Blocitoff')
        .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
