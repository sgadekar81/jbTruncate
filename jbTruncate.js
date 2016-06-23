(function(){
	angular.module('jb', [])
	.directive('jbTruncate',[function(){
		return{
			restrict:'E',
			template:' <span ng-if="attrs.toggle">
						<span ng-hide="ShowTruncatedString" ng-click="ShowTruncatedString=true" style="cursor:hand;outline:none">{{attrs.string}}</span>
					    <span ng-show="ShowTruncatedString" ng-click="ShowTruncatedString=false" style="cursor:hand;outline:none">{{truncatedString}}</span>
					   </span>
						<span ng-if="!attrs.toggle">
							{{truncatedString}}
						</span>',
			link: function($scope, element, attrs){
				$scope.attrs = attrs;				//	currrntly 3 attrs 1)string which is to be truncate 2)truncateAfter
				if(!$scope.attrs.truncateAfter){		//i.e after how many characters string is to be trunacted
					$scope.attrs.truncateAfter = 30;		//by default it is 30 characters
				}								//toggle means allow show more show less by default it is false
				var dots = "...";
				if($scope.attrs.string){
					if($scope.attrs.string.length > $scope.attrs.truncateAfter){
					    $scope.truncatedString = $scope.attrs.string.substring(0,$scope.attrs.truncateAfter) + dots;
					    $scope.ShowTruncatedString = true;
				    }
				}
				else{
					console.log('no string found to truncate....!!!!');
				}
			}
		}
	}])
})();