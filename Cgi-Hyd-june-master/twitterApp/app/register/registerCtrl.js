angular.module('register')
    .controller('registerCtrl', function ($scope, APP_VALIDATIONS, $state) {
        $scope.validations = APP_VALIDATIONS;
        $scope.registerUser = {};
        $scope.countries = [{
                code: "IN",
                name: "India",
                continent: "Asia"
            },
            {
                code: "CA",
                name: "Canada",
                continent: "North America"
            },
            {
                code: "GE",
                name: "Germany",
                continent: "Europe"
                           }];
        $scope.userRegistration = function () {
            $scope.registerUser.countryCode = $scope.selectedCountry.code;

            $state.go("tweets", {
                userDetails: $scope.registerUser
            })
        };
    });
