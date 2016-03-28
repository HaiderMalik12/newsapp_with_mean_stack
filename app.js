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
        ];
       
        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({ title: $scope.title, upvotes: 0, link: $scope.link });
            $scope.title = "";
            $scope.link = "";
        }
        $scope.incrementUpvotes = function(post) {

            post.upvotes += 1;
        }
    }
])
