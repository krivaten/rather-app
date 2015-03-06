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
		var options = {
			sort: {
				createdAt: -1
			}
		};

		// If hideCompleted is set on the session
		if (Session.get("hideCompleted")) {

			// Filter tasks
			return Tasks.find({checked: {$ne: true}}, options);
		} else {

			// Return all of the tasks
			return Tasks.find({}, options);
		}
	}

});
