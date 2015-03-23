/**
 * Modify default user on account creation
 *
 * @method Accounts.onCreateUser
 * @param {Object} options User options
 * @param {Object} user User object
 * @return {Object} Modified user object
 * @since v0.1.0
 */
Accounts.onCreateUser(function(options, user, profile) {
	var services = user.services;

	user.profile = options.profile;

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
				bio: '',
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
				bio: '',
				gender: facebook.gender,
				avatar: 'http://graph.facebook.com/' + facebook.id + '/picture?type=large'
			};

			return user;
		}
	}

	// Build some basic user settings
	user.settings = {
		status: 1
	}

	return user;
});

/**
 * Quick check to make sure user is not deactivated
 *
 * @method Accounts.validateLoginAttempt
 * @param {Object} result Object that contains all the login information
 * @return {Boolean} Whether or not the user's account is active
 * @since v0.1.0
 */
Accounts.validateLoginAttempt(function(result) {
	return result.user.settings.status > 0;
});
