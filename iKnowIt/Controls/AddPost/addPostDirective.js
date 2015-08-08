app.directive('addPost', ['firebaseFactory', function (firebaseFactory) {
    return {
        restrict: "E",
        templateUrl: "../Controls/AddPost/addPostTemplate.html",        
        link: function (scope, element, attributes) {
            scope.tags = [];
            scope.addTag = function () {
                scope.tags.push(scope.newTag);
            }
         
            scope.addPost = function () {
                var currentDate = new Date().toDateString();
                var content = element.find('#ql-editor-1 div')[0].innerHTML;
                var newPost = {
                    title: scope.postTitle,
                    type: scope.type,
                    status: -1,
                    content: content,
                    date: currentDate,
                    tags: scope.tags
                };
                scope.newPostMode = false;
                firebaseFactory.firebaseSource('posts').push(newPost);
               
            }
        }
    }
}]);