var app = angular.module('theApp', ['ngRoute', 'ngSanitize', 'btford.socket-io']);

// var socket = io();

// app.factory('socket', function (socketFactory) {
//   return socketFactory({   ioSocket: io.connect('/some/path')});
// });

// console.log('???');

app.controller('theCtrl', function($scope) {
  // socket.on('hello', function (data) {
  //   console.log('hello data:', data);
  // });

  // $scope.$on('socket:error', function (ev, data) {
  //   console.log('error event', ev, data);
  // });
});
