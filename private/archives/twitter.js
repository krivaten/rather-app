/**
 * Code for implementing deeper Twitter info
 */
var Fiber = Npm.require('fibers');
var Twitter, client, params;
Twitter = Meteor.npmRequire('twitter');

client = new Twitter({
	consumer_key: 'whsAlCJUIKT6niIeTzDoPv3Gr', // API key
	consumer_secret: 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14', // API secret
	access_token_key: twitter.accessToken,
	access_token_secret: twitter.accessTokenSecret
});

params = {screen_name: twitter.screenName};

client.get('users/show', params, function(error, data, response) {
	if (error) console.error(error);

	Fiber(function() {
		Meteor.users.update({_id: user._id}, {$set:{
			profile: {
				name: data.name,
				username: data.screen_name,
				location: data.location,
				bio: data.description,
				avatar: data.profile_image_url
			},
			services: {
				twitter: _.merge(twitter, _.pick(data, [
					'created_at',
					'description',
					'lang',
					'location',
					'name',
					'url'
				]))
			}
		}});
	}).run();
});
