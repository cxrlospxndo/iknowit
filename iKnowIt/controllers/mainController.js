app.controller('mainController', ['$scope', 'firebaseFactory', function ($scope, firebaseFactory) {

    var getMockupContent = function () {
        var content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

        return content;
    }

    $scope.title = 'IKnowIT - Knowledge Database';

    $scope.statusColorEnum = {1: "turquoise", 2: "red", 3: "green", 4: "orange"};
    
    $scope.posts = [
        { title: 'How to upload files using JQuery', type: 'Article', status: 1, content: getMockupContent(), date: new Date().toISOString(), tags: ["JQuery", "Article", "Uploading"] },
        { title: 'Selenium can\'t find elements', type: 'Question', status: 2, content: getMockupContent(), date: new Date().toISOString(), tags: ["Selenium", "Question"] },
        { title: 'How to configure GitHub?', type: 'Question', status: 3, content: getMockupContent(), date: new Date().toISOString(), tags: ["GitHub", "Config"] }, ,
        { title: 'is ng-class faster to render views?', type: 'Note', status: 4, content: getMockupContent(), date: new Date().toISOString(), tags: ["NgClass", "Views"] },
        { title: 'Introduction to regular expressions', type: 'Article', status: 1, content: getMockupContent(), date: new Date().toISOString(), tags: ["Intros"] },
    ];

    $scope.newPost = { title: '', type: '', status: -1, content: '', date: '', tags: [] };
}])

.factory('firebaseFactory', ['$FirebaseObject', function ($FirebaseObject) {
    var firebaseUrl = 'https://blinding-fire-6055.firebaseio.com/';

    var firebaseSource = function (table) {
        return (new Firebase(firebaseUrl + table + '/'));
    }

    var getData = function (table, limit) {
        var ref = firebaseSource(table);
        limit && (ref = ref.limit(limit));
        return $FirebaseObject(ref);
    }

    return {
        firebaseSource: firebaseSource,
        getData: getData
    }

}]);