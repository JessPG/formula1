var controllers = angular.module('Controllers', [])

controllers.controller('carregaLlista', function($scope, $http) {
	// agafem les dades del nostre arxiu
	// el get retorna promesa (equivalent a un fil), que tractarem amb el success
   $http.get('data/driversData.json').success(function(data) {
   	// data es l'arxiu json sencer, les dades dels pilots son a la ruta seguent:
    $scope.llistaPilots = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
   });
   // podem donar-li l'ordre d'aparicio a la llista aqui
   $scope.orderProp = 'Driver.familyName';
});