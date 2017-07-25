(function () {
    function TaskCtrl(Task) {
        this.taskData = Task.all;

        this.addTask = function () {
          if (this.text) {
            this.taskData.$add({
              text: this.text,
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
    }

    angular
        .module('Blocitoff')
        .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
