/**
 * Account change password events
 */
Template.accountChangePassword.events({


	/**
	 * Update password
	 *
	 * @since v0.1.0
	 */
	'submit form': function(event, template) {
		var user, errors, target, currentPassword, newPassword;

		// Prevent default form behavior
		event.preventDefault();

		// Shortcuts
		user = Meteor.user();
		errors = [];
		target = event.target;
		currentPassword = target.currentPassword.value;
		newPassword = target.newPassword.value;

		// Make sure required fields are set
		if (_.isEmpty(currentPassword)) errors.push(messages.fields.currentPassword);
		if (_.isEmpty(newPassword)) errors.push(messages.fields.newPassword);

		if (_.isEmpty(errors) && currentPassword === newPassword) errors.push(messages.fields.identicalPassword);

		// If any errors, display them
		if (!_.isEmpty(errors)) return messages.errors.list(errors);

		Accounts.changePassword(currentPassword, newPassword, function(error) {
			if (error) return messages.errors.general(error);

			messages.account.updatedPassword();

			Router.go('accountIndex');
		});
	}
});
