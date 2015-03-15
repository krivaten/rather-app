/**
 * Account Index Events
 */
Template.accountIndex.events({

	/**
	 * Sign out event
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="sign-out"]': function(e, tmpl) {
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
