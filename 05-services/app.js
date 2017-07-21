(function () {

    "use strict";

    const app = angular.module("app", []);

    app.service("CalcService", function () {
        // constructor function
        this.calculate = function (x, y, operator) {
            return eval(`${x} ${operator} ${y}`);
        };
    });

    app.factory("CounterService", function () {
        // return object literal
        return {
            increase: function (currValue) {
                return ++currValue;
            }
        }
    });

    app.controller("CalcCtrl", function ($scope, CalcService) {
        // $scope variables with default values
        $scope.x = 10;
        $scope.y = 5;
        $scope.operator = '-';

        // function operating on $scope properties
        $scope.calculate = () => {
            return CalcService.calculate($scope.x, $scope.y, $scope.operator);
        };
    });

    app.controller("CounterCtrl", function ($scope, $log, CounterService) {
        $scope.clicked = "I am a SecondCtrl. You just clicked me!";
        $scope.clickCount = 0;
        $scope.count = () => {
            $scope.clickCount = CounterService.increase($scope.clickCount);
            // https://docs.angularjs.org/api
            $log.info(`Click count is ${$scope.clickCount}`);
        }
    });
})();