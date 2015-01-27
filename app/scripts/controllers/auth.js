/**
 * Created by Trevoir on 1/9/2015.
 */
'use strict';

app.controller('AuthCtrl', function ($scope, Auth, $location, user) {
    if (user) {
      $location.path('/');
    }

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
        $location.path('/');
      },function(error){
        $scope.error = error.toString();
      });
    };

  $scope.register = function () {
    Auth.register($scope.user).then(function(user) {
      return Auth.login($scope.user).then(function() {
        user.username = $scope.user.username;
        return Auth.createProfile(user);
      }).then(function() {
        $location.path('/');
      });
    }, function(error) {
      $scope.error = error.toString();
    });
  };
});
