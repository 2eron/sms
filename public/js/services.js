// service
var smsServices = angular.module('smsServices', []);

smsServices.factory('Page', function(){
	var title = 'SMSSS';
	return {
		getTitle: function(){
			return title;
		},
		setTitle: function(newTitle){
			title = newTitle;
		}
	}
});

smsServices.factory('Share', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/api/shares');
		},
		create: function(shareData){
			return $http.post('/api/shares', shareData);
		},
		delete: function(shareId){
			return $http.delete('/api/shares/' + shareId);
		}
	}
}]);

smsServices.factory('Member', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/api/members');
		},
		create: function(userData){
			return $http.post('/api/members', userData);
		},
		delete: function(userId){
			return $http.delete('/api/members/' + userId);
		},
		changeStatus: function(userId, actived){
			return $http.get('/api/members/' + userId + '/' + !actived);
		}
	};
}]);

smsServices.factory('Group', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/api/groups');
		}
	}
}]);