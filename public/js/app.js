/**
* app config
*/
var smsApp = angular.module('smsApp', [
	'ngRoute',
	'smsControllers',
	'smsServices',
	'smsDirectives'
]);

smsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/' ,{
			title: '最近分享会',
			templateUrl: 'views/default.html',
			controller: 'defaultCtrl'
		})
		.when('/shares', {
			title: '分享会管理',
			templateUrl: 'views/list.html',
			controller: 'shareListCtrl'
		})
		.when('/shares/:sharingId', {
			title: '分享会详情',
			templateUrl: 'views/detail.html',
			controller: 'shareDetailCtrl'
		})
		.when('/create', {
			title: '创建分享会',
			templateUrl: 'views/create.html',
			controller: 'shareCreateCtrl'
		})
		.when('/score/:sharingId', {
			title: '评分',
			templateUrl: 'views/score.html',
			controller: 'scoreCtrl'
		})
		.when('/member', {
			title: '用户管理',
			templateUrl: 'views/member.html',
			controller: 'memberCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

smsApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);