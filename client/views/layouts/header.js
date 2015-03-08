Template.layoutHeader.events({
	"click .hide-completed": function (event) {
		Session.set("hideCompleted", !Session.get("hideCompleted"));
	}
});

Template.layoutHeader.helpers({

	/**
	 * Get the number of incomplete tasks
	 *
	 * @method incompleteCount
	 * @return {Number} Number of incomplete tasks
	 * @since v0.1.0
	 */
	incompleteCount: function () {
		return Tasks.find({checked: {$ne: true}}).count();
	},


	/**
	 * Determine whethjer or not to hide completed tasks
	 *
	 * @method hideCompleted
	 * @return {Boolean} Whether or not to hide completed tasks
	 * @since v0.1.0
	 */
	hideCompleted: function () {
		return Session.get("hideCompleted");
	}
});
