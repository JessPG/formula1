// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// carreguem el modul del nostre controlador
var formula1 = angular.module('Formula1', ['ionic', 'Controllers'])

formula1.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// aqui li diem quin template carreguem en funcio de la url
formula1.config (['$stateProvider', function($stateProvider) {
  $stateProvider
  // obrim la llista a la pagina principal, si no sortira en blanc
  .state('list', {
    url: '',
    templateUrl: 'templates/list.html'
  })
  .state('detall', {
    url: '/detail',
    templateUrl: 'templates/detall.html'
  })

}]);