/**
 * Feed Index Helpers
 */
Template.feedIndex.helpers({

	/**
	 * Tasks helper
	 *
	 * @method tasks
	 * @return {Array} Array of tasks
	 * @since v0.1.0
	 */
	tasks: function () {

		// If hideCompleted is set on the session
		if (Session.get("hideCompleted")) {

			// Filter tasks
			return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
		} else {

			// Return all of the tasks
			return Tasks.find({}, {sort: {createdAt: -1}});
		}
	}

});
