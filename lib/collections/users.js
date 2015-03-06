/**
 * Users collection
 * @type {Mongo}
 */

// Disable profile update
Meteor.users.deny({
	update: function() {
		return true;
	}
});
