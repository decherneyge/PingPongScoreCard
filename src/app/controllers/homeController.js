angular.module('pingpongscorecard')
    .controller("HomeController", function($scope, $firebaseArray, fbase) {
        var ref = fbase.ref('players');

        // download the data into a local object
        var syncArray = $firebaseArray(ref);

        //syncArray.$add({
        //    name: 'George',
        //    grip: 'Handshake'
        //});

        // putting a console.log here won't work, see below
        this.players = syncArray;
    });