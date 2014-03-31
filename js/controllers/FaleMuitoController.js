/*
 * FaleMuito Controller
 */
FaleMuitoAPP.controller('FaleMuitoController', function($scope) {
 	//It should be coming from a service or DAO
 	$scope.list = [];

 	$scope.total = function() {
 		var total = 0;
 		console.log("oi");
 		$scope.list.forEach(function(faleMuito) {
 			total = total +1;
 		});

 		return total;
 	}

 	$scope.addFaleMuito = function() {
 		//console.log("aslkjadladks");
 		var faleMuito = {};
 		faleMuito.id = 0;
 		faleMuito.name = $scope.name;
 		faleMuito.number = $scope.number;

 		$scope.list.push(faleMuito);
 		$scope.save();
 		//console.log($scope.list);
 		$scope.name = $scope.number = "";
 	}

 	$scope.save = function() {
 		window.localStorage.setItem('autorizados', JSON.stringify($scope.list));
 	}

 	$scope.getList = function() {
 		var jsonText = window.localStorage.getItem('autorizados');
 		if(jsonText){
 			$scope.list = JSON.parse(jsonText);
 		}
 	}

 });