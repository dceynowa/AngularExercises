(function () {

    "use strict";

    const app = angular.module("app", []);

    // https://docs.angularjs.org/guide/forms
    app.controller('FormCtrl', function ($log) {
        const vm = this;

        // Our form object
        vm.person = {};

        vm.reset = function (form) {
            $log.info(form);
            vm.person = {};
        };

        vm.submit = function (form) {
            $log.info(vm.person);
            vm.person = {};

            form.$setPristine();
            form.$setUntouched();
        };

    });

})();