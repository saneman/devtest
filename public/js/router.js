function router($routeProvider) {
  "use strict";
  $routeProvider.
  when('/', {
    templateUrl: '/template/app.html',
    controller: 'AppController'
  }).
  otherwise({
    redirectTo: '/thingsAreBorked'
  });
}
