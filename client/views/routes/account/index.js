/**
 * Account Index
 */
Template.accountIndex.helpers({

	/**
	 * Get username
	 *
	 * @method username
	 * @return {String} Username
	 * @since v0.1.0
	 */
	username: function() {
		var user = Meteor.user();

		if (!_.isPresent(user)) return false;

		return user.username;
	},


	/**
	 * Get name
	 *
	 * @method name
	 * @return {String} Name
	 * @since v0.1.0
	 */
	name: function() {
		var user = Meteor.user();

		if (!_.isPresent(user)) return false;

		return user.profile.name;
	},


	/**
	 * Get email
	 *
	 * @method email
	 * @return {String} Email
	 * @since v0.1.0
	 */
	email: function() {
		var user = Meteor.user();

		if (!_.isPresent(user)) return false;

		return user.emails[0].address;
	},


	/**
	 * Get bio
	 *
	 * @method bio
	 * @return {String} Bio
	 * @since v0.1.0
	 */
	bio: function() {
		var user = Meteor.user();

		if (!_.isPresent(user)) return false;

		return user.profile.bio;
	}

});
Template.accountIndex.events({


	/**
	 * Sign out event
	 *
	 * @since v0.1.0
	 */
	'submit form': function(event, template) {
		var user, errors, target, username, name, bio, email, options;

		// Prevent default form behavior
		event.preventDefault();

		// Shortcuts
		user = Meteor.user();
		errors = [];
		target = event.target;
		username = target.username.value;
		name = target.name.value;
		bio = target.bio.value;
		email = target.email.value;

		// Make sure required fields are set
		if (_.isEmpty(username)) errors.push(messages.fields.username);
		if (_.isEmpty(name)) errors.push(messages.fields.name);
		if (_.isEmpty(bio)) errors.push(messages.fields.bio);
		if (_.isEmpty(email)) errors.push(messages.fields.email);

		// If any errors, display them
		if (!_.isEmpty(errors)) return messages.general.listErrors(errors);

		if (username === user.username) {
			console.log('Pewp');
			Meteor.users.findOne({username: username});
		}
	},


	/**
	 * Sign out event
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="sign-out"]': function(event, template) {
		Meteor.logout(function(err) {
			if (err) {
				// Error handlinlg
			} else {

				// Redirect to index
				Router.go('index');
			}
		});
	}
});
