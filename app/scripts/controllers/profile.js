/**
 * Created by Trevoir on 1/20/2015.
 */
'use strict';

app.controller('ProfileCtrl', function ($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
  });
});
