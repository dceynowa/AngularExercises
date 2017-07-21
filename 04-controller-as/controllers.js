(function () {

    const app = angular.module("app"); // no dependencies

    app.controller("CalcCtrl", function () {
        const vm = this;

        vm.x = 10;
        vm.y = 5;
        vm.operator = '-';

        // function operating on $scope properties
        vm.calculate = () => {
            // don't do this at home!
            return eval(`${vm.x} ${vm.operator} ${vm.y}`);
        };
    });

    app.controller("CounterCtrl", function () {
        const vm = this;

        vm.clicked = "I am a SecondCtrl. You just clicked me!";
        vm.clickCount = 0;
        vm.count = () => {
            vm.clickCount++;
        };
    });

})();

