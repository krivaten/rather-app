/**
 * Account Index
 */
Template.accountIndex.helpers({

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
	 * Update profile
	 *
	 * @since v0.1.0
	 */
	'submit form': function(event, template) {
		var user, errors, target, name, bio, email, options, duplicateEmail;

		// Prevent default form behavior
		event.preventDefault();

		// Shortcuts
		user = Meteor.user();
		errors = [];
		target = event.target;
		name = target.name.value;
		bio = target.bio.value;
		email = target.email.value;

		// Make sure required fields are set
		if (_.isEmpty(name)) errors.push(messages.fields.name);
		if (_.isEmpty(bio)) errors.push(messages.fields.bio);
		if (_.isEmpty(email)) errors.push(messages.fields.email);

		// Make sure email isn't already registered
		if (email !== user.emails[0].address && _.isEmail(email)) {

			if (!_.isEmail(email)) errors.push(messages.email.invalid);

			// Only check and update the email if there are no errors
			if (_.isEmpty(errors)) {
				duplicateEmail = !!Meteor.users.findOne({
						'emails.address': email
					}, {
						fields: {
							'emails': 1
						}
					});

				// For if email is a duplicate
				if (duplicateEmail) errors.push(messages.fields.email.duplicate);
				else {
					Meteor.call('updateEmail', email, function(error) {
						if (error) return messages.errors.general(error);

						messages.account.updatedEmail();
					});
				}
			}
		}

		// If any errors, display them
		if (!_.isEmpty(errors)) return messages.errors.list(errors);

		// Update name and bio if necessary
		if (name !== user.profile.name || bio !== user.profile.bio) {
			Meteor.call('updateUser', {
				profile: {
					name: name,
					bio: bio
				}
			}, function(error) {
				if (error) return messages.errors.general(error);

				messages.account.updatedProfile();
			});
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
