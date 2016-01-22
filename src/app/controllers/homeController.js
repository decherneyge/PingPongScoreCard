angular.module('pingpongscorecard')
    .controller("HomeController", function($scope, $timeout, playerService, gamesService ) {

        this.currentGame = null;
        this.players = playerService.getPlayers();
        this.gameTime = {
            minutes: 0,
            seconds: 0
        };



        //Game Setup Methods
        this.startNewGame = function(){

            this.currentGame = gamesService.startNewGame();

            this.startGameTimer();

        };
        this.resetScoreKeeper = function(){

            gamesService.clearCurrentGame();
            this.currentGame = null;

        };

        //Player Methods
        this.selectPlayer = function(player){
            if(!this.currentGame){
                return;
            }
        }



        this.startGameTimer = function(){
            if(!this.currentGame){
                return;
            }

            var diff = Date.now() - this.currentGame.startTimeStamp,
                Seconds_from_T1_to_T2 = diff / 1000,
                Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

            this.gameTime = {
                minutes: Math.floor(Seconds_Between_Dates/60),
                seconds: Math.floor(Seconds_Between_Dates%60)
            };


            $timeout(this.startGameTimer.bind(this), 500);


        }


    });

