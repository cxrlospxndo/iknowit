app.directive('addPost', [function () {
    return {
        restrict: "E",
        templateUrl: "../Controls/AddPost/addPostTemplate.html",
        scope: {
           
        },
        link: function (scope, element, attributes) {
            scope.tags = [];
            scope.addTag = function () {
                scope.tags.push(scope.newTag);
            }

        }
    }
}]);