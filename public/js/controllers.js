var smsControllers = angular.module('smsControllers', []);



// member controller
smsControllers.controller('memberCtrl', ['$scope', 'Page', 'Member', 'Group', function($scope, Page, Member, Group){
	$scope.formData = {};
	$scope.submit = {
		submitted: false
	}
	// create a member
	$scope.addMember = function(isValid){

		// call the createUser function from smsServices
		$scope.submit.submitted = true;
		if(isValid){
			Member.create($scope.formData)
				.success(function(data){
					$scope.formData = {};
					$scope.formData.group = $scope.groups[0].abbr;
					$scope.members = data;
					$scope.submit.submitted = false;
				});
		}else{
			console.log('Form Invalid!');
		}
		// console.log($scope.userForm.name.$invalid);
	}
	// get members
	Member.get()
		.success(function(data){
			$scope.members = data;
		});

	// get groups
	Group.get()
		.success(function(data){
			$scope.groups = data;
			$scope.formData.group = $scope.groups[0].abbr;
		});

	// change a member's status
	$scope.changeStatus = function(id, actived){
		Member.changeStatus(id, actived)
			.success(function(data){
				$scope.members = data;
			});
	}
		

	// delete a member
	$scope.delete = function(id){
		Member.delete(id)
			.success(function(data){
				$scope.members = data;
			});
	}
}]);

// share controller

smsControllers.controller('defaultCtrl', ['$scope', function($scope){
	$scope.page = {
		title: 'Default'
	}
}]);