/**
 * Modify default user on account creation
 *
 * @method Accounts.onCreateUser
 * @param {Object} options User options
 * @param {Object} user User object
 * @return {Object} Modified user object
 * @since v0.1.0
 */
Accounts.onCreateUser(function(options, user) {
	var services = user.services;

	// If services is populated
	if (_.isObject(services)) {
		var twitter, facebook;

		twitter = services.twitter;
		facebook = services.facebook;

		// If logging in with Twitter
		if (_.isObject(twitter)) {

			// Build user profile
			user.profile = {
				name: twitter.screenName,
				username: twitter.screenName,
				avatar: twitter.profile_image_url
			}
		}

		// If logging in with Facebook
		if (_.isObject(facebook)) {

			// Build user profile
			user.profile = {
				email: facebook.email,
				name: facebook.name,
				gender: facebook.gender,
				avatar: 'http://graph.facebook.com/' + facebook.id + '/picture?type=large'
			};

			return user;
		}
	}

	return user;
});
