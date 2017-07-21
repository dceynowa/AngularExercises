(function () {

    "use strict";

    const app = angular.module("app", []);
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
        $scope.countLimit = 5;
        $scope.clicked = "I am a SecondCtrl. You just clicked me!";
        $scope.clickCount = 0;
        $scope.count = () => {
            
            
            if ($scope.clickCount < $scope.countLimit){$scope.clickCount++;}
        }
    });
})();