var app = angular.module('isroApp', [])
.controller("myCtrl" , function($scope,$http){
    $scope.satellites = []; // Initialize as empty array
    $http.get('https://isro.vercel.app/api/customer_satellites')
    .then(function (response) {
        $scope.satellites = response.data.customer_satellites;
        $scope.filteredSatellites = $scope.satellites;
    })
    .catch(function (error) {
        console.log("404 data not found.")
    });
    $scope.search = function() {
        // Ensure satellites is defined before filtering
        if ($scope.satellites) {
            $scope.filteredSatellites = $scope.satellites.filter(function(satellite) {
                return satellite.country.toLowerCase().includes($scope.searchText.toLowerCase());
            });
        }
    };
});
