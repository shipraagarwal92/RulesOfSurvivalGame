/*var gameApp = angular.module('gameApp', []);*/

gameApp.controller('gamePageController', ['$scope', '$rootScope','$timeout', function ($scope, $rootScope,$timeout) {

	$scope.playerChance = false;
	$scope.player = 100;
	$scope.dragon = 100;
	$scope.PlayerValue = '';
	$scope.monsterChance = false;
	$scope.dragonValue = 0;
	$scope.playerHeals =false;
	$scope.attackValue = '';
	/*$scope.counter = 60;*/
	$scope.flag = 3;
	$scope.headerShow = true;
	$scope.playAudio = function() {
        var audio = new Audio('song2.mp3');
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audio.play();
    };
    $scope.playAudio();
	/*$scope.startgame = function(){
		$scope.headerShow = false;
	}
	
	$scope.submitName = function(){
		$scope.player_name = $scope.player_name;
	}*/
	//generate random number.
	$scope.rand_10 = function(min, max){
	    return Math.round((Math.random()*(max-min)+min)/2);
	}
	
	/*$scope.counter = 60;
	$scope.countdown = function() {
		debugger;
	   var stopped = $timeout(function() {
	       console.log($scope.counter);
	     $scope.counter--;   
	     $scope.countdown();   
	    }, 1000);
	  };*/
	   
	/*$scope.randomNumber = rand_10(9,21);*/
	
	$scope.dragonAttack = function(){
		$scope.monsterChance = true;
		$scope.playerChance = false;
		$scope.playerHeals =false;
		$scope.dragonValue = $scope.rand_10(9,21);
		if(($scope.player - $scope.dragonValue)> 0)
		$scope.player = $scope.player - $scope.dragonValue;
		else
			{$scope.player = 0;
			setTimeout(function(){alert(" Monster Wins"); location.reload();}, 3000);
		
			}
		 $("#Player-animate").addClass("flash");
		 $("#Dragon-animate").removeClass("flash");
		 $scope.Flag = 1;
	}
	
	$scope.attack = function(){
		$scope.Flag = 0;
		if($scope.player > 0 && $scope.dragon > 0){
		$scope.monsterChance = false;
		$scope.playerChance = true;
		$scope.playerHeals =false;
		$scope.attackValue = $scope.attackValue;
		if(($scope.dragon - $scope.attackValue)> 0)
	$scope.dragon = $scope.dragon - $scope.attackValue;
		else
			{
			$scope.dragon = 0;
			setTimeout(function(){alert(" Player Wins"); location.reload();}, 3000);
			
			}
	$("#Dragon-animate").addClass("flash");
	$("#Player-animate").removeClass("flash");
	 $timeout($scope.dragonAttack, 5000);
		}
		else
			{alert("Game Over");}
	}
	
	$scope.blast = function(){
		$scope.Flag = 0;
		if($scope.player >0 && $scope.dragon >0){
		$scope.monsterChance = false;
		$scope.playerChance = true;
		$scope.playerHeals =false;
		$scope.attackValue = 20;
		if(($scope.dragon - $scope.attackValue)>0)
		$scope.dragon = $scope.dragon - $scope.attackValue;
		else
		{
			$scope.dragon = 0;
			setTimeout(function(){alert(" Player Wins"); location.reload();}, 3000);
			
			}
		$("#Dragon-animate").addClass("flash");
		$("#Player-animate").removeClass("flash");
		 $timeout($scope.dragonAttack, 5000);
		}
		else
		{alert("Game Over");}
		}
	
	$scope.heal = function(){
		if($scope.flag>0){
		$scope.monsterChance = false;
	    $scope.playerChance = false;
	    $scope.playerHeals =true;
		$scope.player = $scope.player + 20;
		if ($scope.player>100)
			$scope.player =100;
		$scope.flag =$scope.flag -1;
		}
		}
	
	$scope.winner = function(){
		if($scope.player > $scope.dragon)
			alert("You wins");
		else if($scope.player = $scope.dragon){
			alert("Game draw");
		}
		else 
			alert("Dragon wins");
	}
	//change color on 
	$scope.$watch(function() { 
	if($scope.dragon > 50){}
	else if($scope.dragon <= 50 && $scope.dragon > 30) {
	document.getElementById("dragon").style.background = "yellow";
     }
    else{
	document.getElementById("dragon").style.background = "red";
	}
	
	if($scope.player > 50){}
	else if($scope.player <= 50 && $scope.player > 30) {
	document.getElementById("player").style.background = "yellow";
     }
    else{
	document.getElementById("player").style.background = "red";
	}
	});
	
	
}]);