(function () {

    "use strict";

    const app = angular.module("app", []);
    
    app.controller("EmpCtrl", function() {
        const vm = this;
        vm.employees = [
            {name: 'John Doe', email: 'john.doe@email.com', dept: 'HR', salary: 5000.00},
            {name: 'Jane Doe', email: 'jane.doe@email.com', dept: 'DEV', salary: 6200.00},
            {name: 'John Kowalsky', email: 'john.kowalsky@email.com', dept: 'DEV', salary: 13500.00},
            {name: 'Debby Sue', email: 'debby.sue@email.com', dept: 'ACC', salary: 4500.00}
        ];
    });
    
    
})();