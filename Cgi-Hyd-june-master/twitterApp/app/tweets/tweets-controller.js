angular.module("tweets")
    .controller("tweetCtrl", function ($scope, tweetSvc, $filter, $state) {
        console.log($state);
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
        tweetSvc.getTweets().then(function (response) {
            $scope.tweets = response;
            angular.forEach($scope.tweets, function (item, index) {
                item.phoneNumber = $filter('phoneformatter')(item.phoneNumber, "IN");
            });



        }).catch(function (response) {
            console.log(response);
        }).finally(function (response) {
            console.log("I am executing Finally!!!!!");
        });
    });
