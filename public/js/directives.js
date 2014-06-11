var smsDirectives = angular.module('smsDirectives', []);

smsDirectives.directive('userUnique', ['$http', function($http){
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ctrl){
			console.log(scope);
			ctrl.$parsers.push(function(viewValue){
				if(viewValue % 2 == 0){
					ctrl.$setValidity('userUnique', true);
					return viewValue;
				} else{
					ctrl.$setValidity('userUnique', false);
					return viewValue;
				}
			});
		}
	}
}]);