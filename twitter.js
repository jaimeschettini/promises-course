var stringify = require('node-stringify');
var _ = require('underscore');
var Twit = require('twit')
var Q = require('q');

var T = new Twit({
    consumer_key:         'PsbfyxA6RN296GhGRgDxl70xm'
  , consumer_secret:      'uXn9HFOgDIHFblbCxzrG87rITZqmk5kDXu3RZR6wjAHQHpMNzr'
  , access_token:         '188811307-SVi6zyQhNnA8NXzZXXzF7JCHxxmUvSRB4sJ0ooqI'
  , access_token_secret:  'cVP08RJ85VlJC7al0LO8aiWVs8lU387mEIHlHfw46Kews'
});

var getFriends = function (username) {
	var d = Q.defer();
	T.get('friends/list', { user_id: username }, function(err, data, response) {
		d.resolve(data);
	});
	return d.promise;
};

var simplify = function (users) {
	return users.map(function(user) {
		return { 
			id: user.id, 
			name: user.name,
			screen_name: user.screen_name,
			followers_count: user.followers_count
		};
	});
};

var simplifyTweets = function (tweets) {
	return tweets.map(function(tweet) {
		return tweet.text;
	});
};

var sortByFollowers = function (friends) {
	return _.sortBy(friends, function(friend) {
		return -friend.followers_count;
	});
};


var getTweets = function (screenName) {
	var d = Q.defer();
	T.get('statuses/user_timeline', { screen_name: screenName, count: 10 }, function(err, data, response) {
		d.resolve(data);
	});
	return d.promise;
};

getFriends('jaimeschettini')
.then(function(data) {
	var friends = simplify(data.users);
	friends = sortByFollowers(friends).slice(0,4);
	console.log('Sorted by followers', friends);

	var friend = friends[0];
	console.log("Amigo com mais seguidores:", friend);
	return friend;
}).then(function(friend) {
	return getTweets(friend.screen_name);
}).then(function(tweets) {
	console.log(simplifyTweets(tweets));
});