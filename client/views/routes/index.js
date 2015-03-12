/**
 * Index helpers
 */
Template.index.helpers({

	/**
	 * Determine whether or not creatingAccount is true
	 * @return {Boolean} Whether or not user is creatingAccount
	 * @since v0.1.0
	 */
	creatingAccount: function() {
		return Session.get('creatingAccount');
	}

});

/**
 * Index Events
 */
Template.index.events({

	/**
	 * Facebook login event
	 *
	 * @since v0.1.0
	 */
	'click .sign-in---facebook': function(event, tmpl) {
		Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email']
		}, function(err) {
			if (err) {
				console.log(err);
				// Error handlinlg
			} else {

				// Redirect to Feed
				Router.go('feed');
			}
		});
	},


	/**
	 * Twitter sign in event
	 *
	 * @since v0.1.0
	 */
	'click .sign-in---twitter': function(event, tmpl) {
		Meteor.loginWithTwitter({
			requestPermissions: ['user']
		}, function(err) {
			if (err) {
				console.log(err);
				// Error handlinlg
			} else {

				// Redirect to Feed
				Router.go('feed');
			}
		})
	},


	/**
	 * Submit sign in form
	 *
	 * @return {Boolean} Prevent default form behavior
	 * @since v0.1.0
	 */
	'submit .form---sign-in': function(event, tmpl) {
		var errors, target, username, email, password, options;

		// Prevent default form behavior
		event.preventDefault();

		errors = [];

		// Shortcuts
		target = event.target;
		username = !_.isUndefined(target.username) ? target.username.value : null;
		email = !_.isUndefined(target.email) ? target.email.value : null;
		password = !_.isUndefined(target.password) ? target.password.value : null;

		// Make sure username and password are set
		if (!_.isString(username)) errors.push('Please provide a username');
		if (!_.isString(password)) errors.push('Please provide a password');

		username = _.trim(username.toLowerCase());

		if (Session.get('creatingAccount')) {

			// Make sure email is set
			if (!_.isString(email)) errors.push('Please provide a email');

			// If any errors, display them
			if (!_.isEmpty(errors)) console.log('ERRORS', errors);

			username = _.trim(username.toLowerCase());

			options = {
				username: username,
				email: email,
				password: password
			}

			Accounts.createUser(options, function(error) {
				if (error) {
					console.log('ERROR', error);
					return false;
				}

				Router.go('feed');
			});

		} else {

			// If any errors, display them
			if (!_.isEmpty(errors)) console.log('ERRORS', errors);

			Meteor.loginWithPassword(username, password, function(error) {
				if (error) {
					console.log('ERROR', error);
					return false;
				}

				Router.go('feed');
			});

		}
	},


	/**
	 * Creating account toggle
	 *
	 * @since v0.1.0
	 */
	'click .create-account-toggle': function() {
		Session.set('creatingAccount', !Session.get('creatingAccount'));
	},

	'click .test-camera': function () {
		var cameraOptions = {
			width: 800,
			height: 600
		};

		MeteorCamera.getPicture(cameraOptions, function (error, data) {
			Session.set("photo", data);
		});
	}

});
