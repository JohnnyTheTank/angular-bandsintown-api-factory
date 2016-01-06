var app = angular.module("app", ['jtt_bandsintown']);
app.controller('controller', ['$scope', 'bandsintownFactory', function($scope, bandsintownFactory) {

    var _app_id = 'angular-bandsintown-api-factory-sample';

    bandsintownFactory.getArtist({
        artist:"Prinz Pi",
        app_id:_app_id,
    }).then(function(_data){
        console.log("artist", _data);
    });

    bandsintownFactory.getEventsFromArtist({
        artist:"Prinz Pi",
        app_id:_app_id,
    }).then(function(_data){
        console.log("events from artist", _data);
    });

    bandsintownFactory.getEventsFromArtistByLocation({
        artist:"Prinz Pi",
        location:'munich, germany',
        date:'all',
        app_id:_app_id,
    }).then(function(_data){
        console.log("events from artist by location", _data);
    });

    bandsintownFactory.getRecommendedEventsFromArtistByLocation({
        artist:"Prinz Pi",
        location:'munich, germany',
        date:'all',
        only_recs: true,
        app_id:_app_id,
    }).then(function(_data){
        console.log("recommended events from artist by location", _data);
    });

}]);
