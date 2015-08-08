app.controller('mainController', ['$scope', 'firebaseFactory', function ($scope, firebaseFactory) {

    var getMockupContent = function () {
        var content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

        return content;
    }

    $scope.title = 'IKnowIT - Knowledge Database';

    $scope.statusColorEnum = {1: "turquoise", 2: "red", 3: "green", 4: "orange"};
    
    $scope.newPostMode = false;
    $scope.newPostAction = function () {
        $scope.newPostMode = true;
    }

    $scope.viewPostList = function () {
        $scope.newPostMode = false;
    }
    $scope.posts = firebaseFactory.getData('posts');

    $scope.newPost = { title: '', type: '', status: -1, content: '', date: '', tags: [] };
}])

.factory('firebaseFactory', ['$firebaseObject', function ($firebaseObject) {
    var firebaseUrl = 'https://blinding-fire-6055.firebaseio.com/';

    var firebaseSource = function (table) {
        return (new Firebase(firebaseUrl + table + '/'));
    }

    var getData = function (table, limit) {
        var ref = firebaseSource(table);
        limit && (ref = ref.limit(limit));
        return $firebaseObject(ref);
    }

    return {
        firebaseSource: firebaseSource,
        getData: getData
    }

}]);