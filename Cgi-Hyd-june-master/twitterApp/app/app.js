//Module Declaration
angular.module("twitterApp", ["tweets", "register", "login", "tweets", "ui.router"]);


//Using the module
angular.module("twitterApp")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        var login = {
            templateUrl: "app/login/login.tpl.html",
            url: "/login"
        };
        var register = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl",
            url: "/register"
        };
        var tweets = {
            templateUrl: "app/tweets/tweet.tpl.html",
            controller: "tweetCtrl",
            params: {
                userDetails: ""
            },
            url: "/tweets"
        };

        $stateProvider.state("login", login);
        $stateProvider.state("register", register);
        $stateProvider.state("tweets", tweets);
    });
