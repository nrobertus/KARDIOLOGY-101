import angular from 'angular';
import angularMeteor from 'angular-meteor';


var kardiology = angular.module('kardiology-home', [
  angularMeteor
]);

kardiology.controller("kardiologyHomeCtrl", ['$scope', function($scope){
  $scope.attributes = [
    {text:'attribute 1'},
    {text:'attribute 2'},
    {text:'attribute 3'}
  ];

  function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    $scope.$digest;
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $scope.$digest;
  }

  window.onSignIn = onSignIn;
  window.signOut = signOut;
}]);
