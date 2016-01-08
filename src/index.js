/**
 * Created by gdecherney on 1/7/2016.
 */

var app = angular.module("pingpongscorecard", ["firebase",'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/partials/home.html",
            controller: 'HomeController'
        });

});

app.run(function(settings){
    //init settings
    settings.set('FirebaseAppName', 'pingpongscorecard');
});

app.factory('settings', function() {
    var settings = {};
    var settingsService = {};

    settingsService.set = function(key, value) {
        settings[key] = value;
    };
    settingsService.list = function() {
        return settings;
    };

    return settingsService;
});