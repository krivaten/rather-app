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
	'click .sign-in-facebook': function(e, tmpl) {
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
	'click .sign-in-twitter': function(e, tmpl) {
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
