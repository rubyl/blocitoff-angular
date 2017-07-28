(function () {
    function TaskCtrl(Task) {
        this.taskData = Task.all;
        this.updateTask = function (task) {
          Task.completeTask(task);
        };

        this.addTask = function (priority) {
          if (this.text) {
            this.taskData.$add({
              text: this.text,
              completed: false,
              timestamp: Date.now(),
              $priority: priority
            });
            this.text = '';
          }
        }

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

        this.data = {
          availableOptions: [
            {id: '1', name: 'High'},
            {id: '2', name: 'Medium'},
            {id: '3', name: 'Low'}
          ],
         selectedOption: {id: '3', name: 'Low'}
         };
    }

    angular
        .module('Blocitoff')
        .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
