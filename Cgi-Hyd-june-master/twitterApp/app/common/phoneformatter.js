angular.module('twitterApp')
    .filter('phoneformatter', function () {
        return function (input, criteria) {
            console.log(input);
            console.log(criteria);
            if (criteria == "IN") {
                return "+91" + input;
            } else if (criteria == "US") {
                return "+1" + input;
            } else if (criteria == "GE") {
                return "+87" + input;
            }
            return input;

        };
    });
