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

var simplifyUsers = function (data) {
	return data.users.map(function(user) {
		return { 
			name: user.name,
			screen_name: user.screen_name,
			followers_count: user.followers_count
		};
	});
};

var sortByFollowers = function (friends) {
	return _.sortBy(friends, function(friend) {
		return -friend.followers_count;
	});
};

var getTop3 = function (friends) {
	var top3 = friends.slice(0, 2);
	console.log('\nTop 3 amigos por seguidores:\n', top3);
	return top3;
};

var getFirst = function (friends) {
	var first = friends[0];
	console.log("\nAmigo com mais seguidores:", { nome: first.name, seguidores: first.followers_count }, '\n');
	return first;
};

var getTweets = function (user) {
	var d = Q.defer();
	T.get('statuses/user_timeline', { screen_name: user.screen_name, count: 10 }, function(err, data, response) {
		d.resolve(data);
	});
	return d.promise;
};

var simplifyTweets = function (tweets) {
	return tweets.map(function(tweet) {
		return tweet.text;
	});
};

getFriends('jaimeschettini')
.then(simplifyUsers)
.then(sortByFollowers)
.then(getTop3)
.then(getFirst)
.then(getTweets)
.then(simplifyTweets)
.then(console.log);