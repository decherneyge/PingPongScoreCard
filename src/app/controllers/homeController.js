angular.module('pingpongscorecard')
    .controller("HomeController", function($scope, $firebaseObject, settings) {
        var ref = new Firebase("https://"+settings.list().FirebaseAppName+".firebaseio.com");

        // download the data into a local object
        $scope.data = $firebaseObject(ref);
        // putting a console.log here won't work, see below
    });