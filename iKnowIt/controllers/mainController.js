app.controller('mainController', ['$scope', function ($scope) {


    $scope.message = '';

    $scope.posts = [
        { title: 'titulo 1', status: '', content: '', date: '' },
        { title: 'titulo 2', status: '', content: '', date: '' },
        { title: 'titulo 3', status: '', content: '', date: '' },
        { title: 'titulo 4', status: '', content: '', date: '' }
    ];

}]);