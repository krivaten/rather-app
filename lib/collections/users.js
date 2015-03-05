/**
 * Users collection settings
 */
Meteor.users.deny({
	update: function() {
		return true;
	}
});
