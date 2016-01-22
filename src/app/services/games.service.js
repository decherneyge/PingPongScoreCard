angular.module("pingpongscorecard")
    .factory('gamesService', function gamesService($firebaseArray, fbase) {

        var refKey = 'games',
            service,
            currentGame;

        function fetchData() {
            var ref = fbase.ref(refKey);

            // download the data into a local object
            return $firebaseArray(ref);
        };

        function createNewGame(){

            return {
                leftPlayerId : null,
                rightPlayerId : null,
                gameTypeId : null,
                leftPlayerScore: 0,
                rightPlayerScore: 0,
                startTimeStamp: null,
                endTimeStamp: null
            };
        }

        service = {
            getGamess: function() {

                return fetchData();
            },
            saveGame: function(game) {

                fetchData().$add(game);
            },
            startNewGame : function(){
                currentGame = createNewGame();
                currentGame.startTimeStamp = Date.now();
                return currentGame;
            },
            clearCurrentGame : function(){
                currentGame = null;
            }

        }

        return service;
    });