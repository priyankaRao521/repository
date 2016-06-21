angular.module('twitterApp')
    .controller("mainCtrl", function ($scope, tabService, $state) {
        var registerUrl = 'app/register/register.tpl.html';
        var loginUrl = 'app/login/login.tpl.html';
        var tweetUrl = 'app/tweets/tweet.tpl.html';


        $scope.loadTemplate = function (type) {
            if (type.name == "Login") {
                $state.go("login");
            }
            if (type.name == "Register") {
                $state.go("register");
            }
            if (type.name == "Tweets") {
                $state.go("tweets");
            }
        };
        $scope.headerUrl = "app/common/navbar.tpl.html";

        tabService.getTabs().success(function (response) {
                console.log(response);
                $scope.tabs = response.tabs;
            })
            .error(function (response) {
                console.log(response);
            })

    });
