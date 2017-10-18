app.controller('listController', ['$scope', ($scope) => {
        function Task(){
            this.name = "";
            this.completed = false;
        }
        
        $scope.todoList = [];
        $scope.task = new Task(); 
        $scope.addItem = () => {
            if (!$scope.task.name == ""){
                $scope.todoList.push($scope.task);
                $scope.task = new Task();
            }
        }
        $scope.deleteItem = (task) => {
            var index = $scope.todoList.indexOf(task);
            $scope.todoList.splice(index,1);
        }
        $scope.deleteItens = () => {
            var newList = [];
            $scope.todoList.forEach((task) => {
                if(!task.completed){
                    newList.push(task);
                }
            });
            $scope.todoList = newList;
        }
 }]);


