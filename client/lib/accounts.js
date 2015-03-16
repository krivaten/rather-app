/**
 * Accounts interactions
 */
var doneCallback;

/**
 * Wehn a reset password link is clicked
 *
 * @method
 * @param {String} token Token used to reset the password
 * @param {Function} done function to call when the password reset UI flow is complete.
 * @since v0.1.0
 */
Accounts.onResetPasswordLink(function(token, done) {
	// Set token on the session
	Session.set('resetToken', token);

	doneCallback = done;

	Router.go('accountResetPassword');
});
