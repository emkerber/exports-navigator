(function() {
    'use strict';

    angular.module('exportsNavigator').controller('AdminTopicsController', AdminTopicsController);

    AdminTopicsController.$inject = ['currentAuth', '$http', 'Data'];

    function AdminTopicsController(currentAuth, $http, Data) {
        var vm = this;

        vm.data = Data.data;

        Data.getTopics();

        vm.export = function() {
            console.log('Export clicked');
        };

        vm.import = function() {
            console.log('Import clicked');
        };
        vm.print = function() {
            Data.printPage();
        };
    }

})();
