/**
 * Reset password
 */

Template.accountResetPassword.helpers({

	/**
	 * Reset password token
	 *
	 * @method resetToken
	 * @return {String} Reset password token
	 * @since v0.1.0
	 */
	resetToken: function() {
		return Session.get('resetToken');
	}

});

Template.accountResetPassword.events({

	/**
	 * Sign out event
	 *
	 * @since v0.1.0
	 */
	'submit form': function(event, template) {
		var token, target, newPassword;

		// Prevent default form behavior
		event.preventDefault();

		target = event.target;
		token = Session.get('resetToken');
		password = !_.isUndefined(target.password) ? target.password.value : null;

		if (!_.isString(token)) errors.push('Invalid Token');
		if (!_.isString(password)) errors.push('Please provide a password');

		Accounts.resetPassword(token, password, function(error) {
			if (error) {
				toastr["error"](error.reason);
			} else {
				toastr["error"]("Yay!");

				// Redirect to index
				Router.go('index');
			}
		});
	}
});
