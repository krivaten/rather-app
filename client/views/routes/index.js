/**
 * Index helpers
 */
Template.index.rendered = function() {

	// Set default page mode
	Session.set('pageMode', 'sign-in');

};

Template.index.helpers({

	/**
	 * Is sign-up the current page mode
	 *
	 * @method signUp
	 * @return {Boolean} Whether or not user is in sign-up mode
	 * @since v0.1.0
	 */
	signUp: function() {
		return Session.get('pageMode') === 'sign-up';
	},


	/**
	 * Is forgot-password the current page mode
	 *
	 * @method forgotPassword
	 * @return {Boolean} Whether or not user is in forgot-password mode
	 * @since v0.1.0
	 */
	forgotPassword: function() {
		return Session.get('pageMode') === 'forgot-password';
	},

	/**
	 * Determine the submit button content
	 *
	 * @method forgotPassword
	 * @return {String} Text to be displayed in submit button
	 * @since v0.1.0
	 */
	submitButtonString: function() {
		var result;

		switch (Session.get('pageMode')) {
			case ('sign-up'):
				result = 'Sign Up';
				break;

			case ('forgot-password'):
				result = 'Reset Password';
				break;

			default:
				result = 'Sign In';
				break;
		}

		return result;
	},


	/**
	 * Is the name field disabled
	 *
	 * @method nameDisabled
	 * @return {Boolean} Whether or not the name field is disabled
	 * @since v0.1.0
	 */
	nameDisabled: function() {
		return !Session.equals('pageMode', 'sign-up');
	},


	/**
	 * Is the email field disabled
	 *
	 * @method emailDisabled
	 * @return {Boolean} Whether or not the email field is disabled
	 * @since v0.1.0
	 */
	emailDisabled: function() {
		return false;
	},


	/**
	 * Is the password field disabled
	 *
	 * @method passwordDisabled
	 * @return {Boolean} Whether or not the password field is disabled
	 * @since v0.1.0
	 */
	passwordDisabled: function() {
		return Session.equals('pageMode', 'forgot-password');
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
	'click [data-trigger="facebook"]': function(event, template) {
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
	'click [data-trigger="twitter"]': function(event, template) {
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
	'submit form': function(event, template) {
		var pageMode, errors, target, name, email, password, options;

		// Prevent default form behavior
		event.preventDefault();

		// Shortcuts
		pageMode = Session.get('pageMode');
		errors = [];
		target = event.target;
		name = target.name.value;
		email = target.email.value;
		password = target.password.value;

		// Trim and convert name and email to lowercase
		name = _.trim(name);
		email = _.trim(email.toLowerCase());

		// Make sure required fields are set
		if (_.isEmpty(email)) errors.push(messages.fields.email);
		if (!_.isEmail(email)) errors.push(messages.fields.email.invalid);

		switch (pageMode) {

			case ('sign-up'):

				// Make sure required fields are set
				if (_.isEmpty(password)) errors.push(messages.fields.password);
				if (_.isEmpty(name)) errors.push(messages.fields.name);

				// If any errors, display them
				if (!_.isEmpty(errors)) return messages.errors.list(errors);

				// Build options
				options = {
					email: email,
					profile: {
						name: name,
						bio: 'I\'m new here'
					},
					password: password
				}

				Accounts.createUser(options, function(error) {
					if (error) {
						console.log('ERROR', error);
						return false;
					}

					toastr["success"]("Thanks for registering");

					Router.go('feedIndex');
				});

				break;

			case ('forgot-password'):

				// If any errors, display them
				if (!_.isEmpty(errors)) return messages.errors.list(errors);

				// Build options
				options = {
					email: email
				};

				Accounts.forgotPassword(options, function(error) {
					if (error) {
						toastr["error"](error.reason);
						return false;
					}

					// Reset the form
					event.target.reset();

					toastr["success"]("Please check your email to reset your password");
				});

				break;

			default:
				// Make sure required fields are set
				if (_.isEmpty(password)) errors.push(messages.fields.password);

				// If any errors, display them
				if (!_.isEmpty(errors)) return messages.errors.list(errors);

				Meteor.loginWithPassword(email, password, function(error) {
					if (error) {
						toastr["error"](error.reason);
						return false;
					}

					Router.go('feedIndex');
				});

				break;
		}
	},


	/**
	 * Creating account toggle
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="sign-up"]': function() {
		var pageMode = Session.get('pageMode');

		Session.set('pageMode', (pageMode !== 'sign-up' ? 'sign-up' : 'sign-in'));
	},

	'click [data-trigger="forgot-password"]': function() {
		var pageMode = Session.get('pageMode');

		Session.set('pageMode', (pageMode !== 'forgot-password' ? 'forgot-password' : 'sign-in'));
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
