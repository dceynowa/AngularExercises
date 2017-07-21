/*
* TODO Basic Calc 2
*
* Create an application that let user calculate 2 values using different operators.
* - Operators list must be assigned from controllers (use ng-options directive: https://docs.angularjs.org/api/ng/directive/ngOptions)
* - Show history of commands to the user (appended with every calculate() call)
* - Let users clear the history
*/
(function () {

    "use strict";

    const app = angular.module("app", []);
    app.controller("CalcCtrl", function ($scope) {
        // available operators (no view changes required to add new operator)
        $scope.availableOperators = ["+", "*"];

        $scope.x = 10;
        $scope.y = 5;
        $scope.operator = undefined;

        // TODO Create result object to show in the view after the click
        $scope.result = undefined;
        // TODO Create history object or array
         $scope.history = [];
        // click handler
        $scope.calculate = function () {
            let exp = `${$scope.x} ${$scope.operator} ${$scope.y}`;
            let result = eval(exp);
            $scope.result = result;
            $scope.history.push(`${exp} = ${result}`);
        };

        $scope.clearHistory= function() {
            $scope.history = [];
        }
       
    });
})();