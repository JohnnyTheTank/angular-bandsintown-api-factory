"use strict";

angular.module("jtt_bandsintown", [])
    .factory('bandsintownFactory', ['$http', 'bandsintownSearchDataService', function ($http, bandsintownSearchDataService) {

        var bandsintownFactory = {};

        bandsintownFactory.getArtist = function (_params) {
            var bandsintownSearchData = bandsintownSearchDataService.getNew("artist", _params);

            return $http.jsonp(
                bandsintownSearchData.url,
                {
                    method: 'GET',
                    params: bandsintownSearchData.object,
                }
            );
        };

        bandsintownFactory.getEventsFromArtist = function (_params) {
            var bandsintownSearchData = bandsintownSearchDataService.getNew("eventsFromArtist", _params);

            return $http.jsonp(
                bandsintownSearchData.url,
                {
                    method: 'GET',
                    params: bandsintownSearchData.object,
                }
            );
        };

        bandsintownFactory.getEventsFromArtistByLocation = function (_params) {
            var bandsintownSearchData = bandsintownSearchDataService.getNew("eventsFromArtistByLocation", _params);

            return $http.jsonp(
                bandsintownSearchData.url,
                {
                    method: 'GET',
                    params: bandsintownSearchData.object,
                }
            );
        };

        bandsintownFactory.getRecommendedEventsFromArtistByLocation = function (_params) {
            var bandsintownSearchData = bandsintownSearchDataService.getNew("recommendedEventsFromArtistByLocation", _params);

            return $http.jsonp(
                bandsintownSearchData.url,
                {
                    method: 'GET',
                    params: bandsintownSearchData.object,
                }
            );
        };

        return bandsintownFactory;
    }])
    .service('bandsintownSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return 'http://api.bandsintown.com/';
        };

        this.fillDataInObjectByList = function(_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if(angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });
            return _object;
        };

        this.getNew = function (_type, _params) {

            var bandsintownSearchData = {
                object: {
                    format:"json",
                    api_version: "2.0",
                    app_id:_params.app_id || "angular-bandsintown-api-factory",
                    callback: "JSON_CALLBACK",
                },
                url: "",
            };

            if (angular.isDefined(_params.limit)) {
                bandsintownSearchData.object.limit = _params.limit;
            }

            switch (_type) {

                case "artist":
                    bandsintownSearchData = this.fillDataInObjectByList(bandsintownSearchData, _params, [
                        'artist_id'
                    ]);


                    bandsintownSearchData.url = this.getApiBaseUrl()+"artists/"+_params.artist+".json";
                    break;

                case "eventsFromArtist":
                    bandsintownSearchData = this.fillDataInObjectByList(bandsintownSearchData, _params, [
                        'date', 'artist_id'
                    ]);

                    bandsintownSearchData.url = this.getApiBaseUrl()+"artists/"+_params.artist+"/events.json";
                    break;

                case "eventsFromArtistByLocation":
                    bandsintownSearchData = this.fillDataInObjectByList(bandsintownSearchData, _params, [
                        'date', 'artist_id', 'location', 'radius'
                    ]);

                    bandsintownSearchData.url = this.getApiBaseUrl()+"artists/"+_params.artist+"/events/search.json";
                    break;

                case "recommendedEventsFromArtistByLocation":
                    bandsintownSearchData = this.fillDataInObjectByList(bandsintownSearchData, _params, [
                        'date', 'artist_id', 'location', 'radius', 'only_recs'
                    ]);

                    bandsintownSearchData.url = this.getApiBaseUrl()+"artists/"+_params.artist+"/events/recommended";
                    break;
            }

            return bandsintownSearchData;
        };
    });