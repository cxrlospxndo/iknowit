app.directive('addPost', ['firebaseFactory', function (firebaseFactory) {
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
            var currentDate = new Date() + '';
            scope.addPost = function () {
                var newPost = {
                    title: scope.title,
                    type: scope.type,
                    status: -1,
                    content: 'holaaaa',
                    date: currentDate,
                    tags: scope.tags
                };
                firebaseFactory.firebaseSource('posts').push(newPost);
            }
        }
    }
}]);