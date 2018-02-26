var gameApp = angular.module('gameApp', []);

gameApp.config(['$routeProvider',
                  function($routeProvider) {
                    $routeProvider.
                      when('/gamePage', {
                		templateUrl: 'gamePage.html',
                		controller: 'gamePageController',
                		reloadOnSearch: false
                	}).
                      /*when('/', {
                		templateUrl: 'index.html',
                		controller: 'gamePageController'
                	}).
                      */
                      otherwise({
                		redirectTo: '/'
                      });
                }]);