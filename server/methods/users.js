/**
 * User methods
 */
Meteor.methods({

	deactivateUser: function() {

		// Make sure the user is logged in
		if (!Meteor.userId()) {
			throw new Meteor.Error('Not logged in');
		}

		Meteor.users.update({_id: Meteor.userId()}, {
			$set: {
				"settings.status": 0
			}
		});
	},

	updateUser: function(options) {

		// Make sure the user is logged in
		if (!Meteor.userId()) {
			throw new Meteor.Error('Not logged in');
		}

		Meteor.users.update({_id: Meteor.userId()}, {
			$set: {
				"profile.name": options.profile.name,
				"profile.bio": options.profile.bio
			}
		});
	},

	updateEmail: function(email) {
		var emailPattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		// Make sure the user is logged in
		if (!Meteor.userId()) {
			throw new Meteor.Error('Not logged in');
		}

		if (email && !emailPattern.test(email)) {
			throw new Meteor.Error('Invalid email');
		}

		Meteor.users.update({_id:Meteor.user()._id}, {
			$set:{
				"emails": [
					{
						address: email
					}
				]
			}
		});
	}
});
