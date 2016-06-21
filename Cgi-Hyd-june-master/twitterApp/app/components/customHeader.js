angular.module("twitterApp")
    .directive("customHeader", function () {
        return {
            template: "<span ng-transclude></span><h1>Hello Guys</h1>",
            transclude: true
        }
    });

angular.module("twitterApp")
    .directive("tweetBox", function () {
        return {
            templateUrl: "app/components/tweetbox.tpl.html",
            restrict: "A",
            controller: function ($scope) {
                $scope.addTweet = function () {
                    var myTweet = {
                        tweetText: $scope.tweetText

                    };
                    $scope.tweets.push(myTweet);
                    console.log($scope.tweets);
                };
            }
        }
    });

angular.module("twitterApp")
    .directive("customDatePicker", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        }
    });
