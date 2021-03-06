//client/scripts/HomeCtrl.js User Landing View Controller
(function() {
    'use strict';

    angular.module('exportsNavigator').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$http', 'Data'];

    function HomeCtrl($http, Data) {


        var vm = this;
        vm.data = Data.data;

        Data.getIndustries();

        //below code is the function to keep track of WHICH industry was selected and SUBMITTED on the home page
        vm.selectedId = 2;
        vm.selectedIndustry = function(industrySelected) {
            console.log('you chose this industry:', vm.industrySelected);
            var thisIndustry = vm.industrySelected.industry;

            return (thisIndustry);

        };




    } // end home controller

})();


// $scope.prequalData = [{
//     label: 'Food-Aggribusiness',
//     value: 'Food-Aggribusiness'
// }, {
//     label: 'Medical Device, Pharma & Life Sciences',
//     value: 'Medical Device, Pharma & Life Sciences'
// }, {
//     label: 'Other',
//     value: 'Other',
//     /*isDisabled: true*/
// }, ];
// $scope.group = 'Food-Aggribusiness';
