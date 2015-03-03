/**
 * Server configuration
 */
Meteor.startup(function () {
	Meteor.publish("tasks", function () {
		return Tasks.find({
			$or: [
				{ private: {$ne: true} },
				{ owner: this.userId }
			]
		});
	});
});
