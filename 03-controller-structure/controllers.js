(function () {

    const app = angular.module("app"); // no dependencies

    app.controller("CalcCtrl", function ($scope) {
        // $scope variables with default values
        $scope.x = 10;
        $scope.y = 5;
        $scope.operator = '-';

        // function operating on $scope properties
        $scope.calculate = () => {
            // don't do this at home!
            return eval(`${$scope.x} ${$scope.operator} ${$scope.y}`);
        };
    });

    app.controller("CounterCtrl", function ($scope) {
        $scope.clicked = "I am a SecondCtrl. You just clicked me!";
        $scope.clickCount = 0;
        $scope.count = () => {
            $scope.clickCount++;
        }
    });

})();

