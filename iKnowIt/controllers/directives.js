angular.module('app.directives')
.directive('test', function () {
    return {
        link: function (scope, element, attributes) {
            alert('hadoken');
        }
    }
});