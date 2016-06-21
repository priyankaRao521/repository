angular.module('tweets')
    .service("tweetSvc", function ($http, $q) {
        this.getTweets = function () {

            var dfd = $q.defer();

            $http.get('app/tweets/tweets.json')
                .then(function (response) {
                    dfd.resolve(response.data.tweets);
                }).catch(function (response) {
                    dfd.reject("Error Occurred");
                });

            return dfd.promise;
        };
    });
