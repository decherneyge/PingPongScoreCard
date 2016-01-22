angular.module("pingpongscorecard")
    .factory('playerService', function playersService($firebaseArray, fbase) {

        var refKey = 'players',
            service;

        function fetchData() {
            var ref = fbase.ref(refKey);

            // download the data into a local object
            return $firebaseArray(ref);
        };

        service = {
            getPlayers: function() {

                return fetchData();
            },
            addPlayer: function(player) {

                if (!player.name) {
                    throw new Error("All players must have a name");
                }

                if (!player.grip) {
                    player.grip = 'Handshake';
                }

                fetchData().$add(player);
            }
        }

        return service;
    });