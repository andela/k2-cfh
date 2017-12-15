angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.directives', 'firebase'])
  .config(['$routeProvider',
    ($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/index.html'
        })
        .when('/testimonies', {
          templateUrl: 'views/testimonies.html'
        })
        .when('/app', {
          templateUrl: '/views/app.html',
        })
        .when('/avatars', {
          templateUrl: '/views/avatars.html'
        })
        .when('/privacy', {
          templateUrl: '/views/privacy.html',
        })
        .when('/bottom', {
          templateUrl: '/views/bottom.html'
        })
        .when('/signin', {
          templateUrl: '/views/signin.html'
        })
        .when('/signup', {
          templateUrl: '/views/signup.html'
        })
        .when('/dashboard', {
          templateUrl: '/views/gamelogs.html'
        })
        .otherwise({
          redirectTo: '/avatars'
        });
    }
  ]).config(['$locationProvider',
    ($locationProvider) => {
      $locationProvider.hashPrefix('!');
    }
  ]).run(['$rootScope', ($rootScope) => {
    $rootScope.safeApply = function (fn) {
      const phase = this.$root.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof (fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }])
  .run(['DonationService', (DonationService) => {
    window.userDonationCb = (donationObject) => {
      DonationService.userDonated(donationObject);
    };
  }]);

angular.module('mean.system', []);
angular.module('mean.directives', []);
