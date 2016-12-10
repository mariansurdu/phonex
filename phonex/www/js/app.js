// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic',"ngCordova"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.charge', {
    url: '/charge',
    views: {
      'tab-charge': {
        templateUrl: 'templates/tab-charge.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.finish', {
    url: '/finished',
    views: {
      'tab-finish': {
        templateUrl: 'templates/tab-finish.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

.controller('DashCtrl', function($scope,$ionicPlatform,$state) {
  $scope.option="x";
 // alert("ok")

  function successCallback(){}
  function errorCallback(){}

    $scope.redirect=function(){
    $state.go("tab.charge")
  }
 

  $scope.submitCharge=function(){
  //  alert($scope.option)
    $state.go("tab.finish");
  }

  $scope.option1=function(){
    $scope.option=1;
  }
  $scope.option2=function(){
    $scope.option=2;
  }
  $scope.option3=function(){
    $scope.option=3;
  }
  $scope.option4=function(){
    $scope.option=4;
  }

  $scope.$watch("option",function(){
    console.log($scope.option);
  })

  $ionicPlatform.ready(function(){
     document.addEventListener("deviceready", function () {
window.plugins.sim.requestReadPermission(successCallback, errorCallback);
window.plugins.sim.getSimInfo(
      function(r) { 
       $scope.out = r; 

       $scope.$apply(); 
       console.log(r); }
    );
  })
      }, false);
})

.controller('AccountCtrl', function($scope) {
 console.log("Account")
})

.controller('HomeTabCtrl', function($scope, $ionicModal) {
 // alert("xx")
})


