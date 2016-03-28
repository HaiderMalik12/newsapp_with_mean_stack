var app = angular.module('flapperNews', []);
app.controller('MainCtrl', [
    '$scope',
    function($scope) {

        $scope.posts = [
            { title: 'post1', upvotes: 5 },
            { title: 'post2', upvotes: 15 },
            { title: 'post3', upvotes: 9 },
            { title: 'post4', upvotes: 4 },
            { title: 'post5', upvotes: 7 }
        ]
    }
])
