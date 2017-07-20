(function () {
    function TaskCtrl(Task) {
        console.log('Poop')
        this.taskData = Task.all;
    }

    angular
        .module('Blocitoff')
        .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
