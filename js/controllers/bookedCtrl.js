angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope, $stateParams, $location, mainSrv) {

    var id = $stateParams.id;


    $scope.locations = mainSrv.travelInfo;


    //console.log($scope.locations);

    function changeBackground (id){

      //console.log(id);
      for(var x in $scope.locations){
        if($scope.locations[x].id == id){
          //console.log('$stateParams: ' + typeof id);
          //console.log(typeof $scope.locations[x].id);
            $scope.background = {'background-image': 'url('+$scope.locations[x].image+')'};
            $scope.bookedCity = $scope.locations[x].city;
        }
      }
    }

changeBackground(id);
  }); //end controller
