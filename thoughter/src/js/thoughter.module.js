(function() {
  'use strict';

  angular.module('thoughter', ['ui.router'])
    .config(routerConfig)
    .run(setupAuthCheck);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // This can be used to prevent '/#' from appearing before the path in the URL
    // Having issues with the refresh - check it out
    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    // Sets default route, if path is empty, take user
    // to state described by '/'
    $urlRouterProvider.when('', '/');

    // If url doesn't match any state,
    // fall back to this url's state (typically 404 not found)
    $urlRouterProvider.otherwise('/not-found')

    $stateProvider
      .state(
        {
          name: 'home',
          url: '/',
          templateUrl: 'views/_thought_list.html',
          controller: 'ThoughtController',
          controllerAs: 'thoughtCtrl'
        }
      ).state(
        {
          name: 'create',
          url: '/create',
          templateUrl: 'views/_create_thought.html',
          controller: 'ThoughtController',
          controllerAs: 'thoughtCtrl',
          requiresLogin: true
        }
      ).state(
        {
          name: 'single-thought',
          url: '/thought/:id',  // :id is a URL parameter
          templateUrl: 'views/_single_thought.html',
          controller: 'ThoughtController',
          controllerAs: 'thoughtCtrl'
        }
      ).state(
        {
          name: 'about',
          url: '/about',
          templateUrl: 'views/_about.html'
        }
      ).state(
        {
          name: 'login',
          url: '/login',
          templateUrl: 'views/_login.html',
          controller: 'UserController',
          controllerAs: 'userCtrl'
        }
      ).state(
        {
          name: 'not-found',
          url: '/not-found',
          templateUrl: 'views/_404.html'
        }
      );
  };

  setupAuthCheck.$inject = ['$rootScope', '$state', 'UserService']

  function setupAuthCheck($rootScope, $state, UserService) {
    // $on is essentially an event listener on the root scope
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.requiresLogin && !UserService.getToken()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  };
})();
