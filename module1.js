

(function()
{
    "use strict";
    angular.module("asg1",[])
    .controller("item",item)
    item.$inject=['$scope'];
    function item($scope)
    {
       
        $scope.name="";
        
           $scope.mysplit=function()
           {
            if (!$scope.items || $scope.items.trim() === "") {
                $scope.message = "Please enter data first";
                return;
              }
           
              var itemsArray = $scope.items.split(",");
              if (itemsArray.length <= 3) {
                $scope.message = "Enjoy!";
              } else {
                $scope.message = "Too much!";
              }
        
                }

           
        }
    

})();


