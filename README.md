**angular-bandsintown-api-factory** is an angularjs module with a bandsintown v2 api factory.

[![npm version](https://badge.fury.io/js/angular-bandsintown-api-factory.png)](https://badge.fury.io/js/angular-bandsintown-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-bandsintown-api-factory.png)](https://badge.fury.io/bo/angular-bandsintown-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage
1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-bandsintown-api-factory`
    2. `npm install --save angular-bandsintown-api-factory`
    3. download [angular-bandsintown-api-factory.zip](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory/zipball/master)
2. Add `jtt_bandsintown` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-bandsintown-api-factory/dist/angular-bandsintown-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-bandsintown-api-factory/dist/angular-bandsintown-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-bandsintown-api-factory.min.js"></script>
    ```
4. Use the factory `bandsintownFactory`


### factory methods

#### getArtist
Get all parameters [here](http://bandsintown.com/api/requests#artists-get)
```js
// all parameters: http://bandsintown.com/api/requests#artists-get
bandsintownFactory.getArtist({
    artist:"<ARTIST_NAME>", // ? and / characters must be double escaped. Artists such as "AC/DC" will end up as "AC%252FDC"
    artist_id:"<ARTIST_ID>", // (optional) fallback: mbid_<id> (MusicBrainz ID), fbid_<id> (Facebook Page ID)
    app_id:"<YOUR_APP_ID>", //The application ID can be anything, but should be a word that describes your application or company.
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getEvents
Get all parameters [here](http://bandsintown.com/api/requests#artists-events)
```js
// all parameters: http://bandsintown.com/api/requests#artists-events
bandsintownFactory.getEventsFromArtist({
    artist:"<ARTIST_NAME>", // ? and / characters must be double escaped. Artists such as "AC/DC" will end up as "AC%252FDC"
    artist_id:"<ARTIST_ID>", // (optional) fallback: mbid_<id> (MusicBrainz ID), fbid_<id> (Facebook Page ID)
    date:"<DATE>", // (optional) (default: upcoming) yyyy-mm-dd || yyyy-mm-dd,yyyy-mm-dd (inclusive range) || upcoming || all
    app_id:"<YOUR_APP_ID>", //The application ID can be anything, but should be a word that describes your application or company.
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

Get all parameters [here](http://bandsintown.com/api/requests#artists-event-search)
```js
// all parameters: http://bandsintown.com/api/requests#artists-event-search
bandsintownFactory.getEventsFromArtistByLocation({
    artist:"<ARTIST_NAME>", // ? and / characters must be double escaped. Artists such as "AC/DC" will end up as "AC%252FDC"
    artist_id:"<ARTIST_ID>", // (optional) fallback: mbid_<id> (MusicBrainz ID), fbid_<id> (Facebook Page ID)
    date:"<DATE>", // (optional) (default: upcoming) yyyy-mm-dd || yyyy-mm-dd,yyyy-mm-dd (inclusive range) || upcoming || all
    location:"<LOCATION>", // city,state (US or CA) || city,country || lat,lon || ip address
    radius:"<RADIUS">, // (optional) (default: 25) in miles. valid values: 0-150
    app_id:"<YOUR_APP_ID>", //The application ID can be anything, but should be a word that describes your application or company.
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

Get all parameters [here](http://bandsintown.com/api/requests#artists-recommended-events)
```js
// all parameters: http://bandsintown.com/api/requests#artists-recommended-events
bandsintownFactory.getRecommendedEventsFromArtistByLocation({
    artist:"<ARTIST_NAME>", // ? and / characters must be double escaped. Artists such as "AC/DC" will end up as "AC%252FDC"
    artist_id:"<ARTIST_ID>", // (optional) fallback: mbid_<id> (MusicBrainz ID), fbid_<id> (Facebook Page ID)
    date:"<DATE>", // (optional) (default: upcoming) yyyy-mm-dd || yyyy-mm-dd,yyyy-mm-dd (inclusive range) || upcoming || all
    location:"<LOCATION>", // city,state (US or CA) || city,country || lat,lon || ip address
    radius:"<RADIUS">, // (optional) (default: 25) in miles. valid values: 0-150
    only_recs:"<ONLY_RECS>", // (optional) (default: false) if true, the response will only include matching events for artists similar to the specified artist. if false, the response may also include matching events for the specified artist.
    app_id:"<YOUR_APP_ID>", //The application ID can be anything, but should be a word that describes your application or company.
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

## Bandsintown V2 JSON API
Docs: http://bandsintown.com/api/requests


## License

MIT