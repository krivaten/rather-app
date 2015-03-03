Meteor.methods({

	/**
	 * Add task method
	 *
	 * @method addTask
	 * @param {String} text Content of new task
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	addTask: function (text) {
		// Make sure the user is logged in before inserting a task
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		Tasks.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username || Meteor.user().profile.name
		});
	},


	/**
	 * Delete task method
	 *
	 * @method deleteTask
	 * @param {String} taskId Id of task to be modified
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	deleteTask: function (taskId) {
		var task = Tasks.findOne(taskId);

		if (task.private && task.owner !== Meteor.userId()) {
			// If the task is private, make sure only the owner can delete it
			throw new Meteor.Error("not-authorized");
		}

		Tasks.remove(taskId);
	},


	/**
	 * Delete task method
	 *
	 * @method setChecked
	 * @param {String} taskId Id of task to be modified
	 * @param {Boolean} setToPrivate Whether or not to set task to checked
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	setChecked: function (taskId, setChecked) {
		var task = Tasks.findOne(taskId);

		if (task.private && task.owner !== Meteor.userId()) {
			// If the task is private, make sure only the owner can check it off
			throw new Meteor.Error("not-authorized");
		}

		Tasks.update(taskId, { $set: { checked: setChecked} });
	},


	/**
	 * Delete task method
	 *
	 * @method setPrivate
	 * @param {String} taskId Id of task to be modified
	 * @param {Boolean} setToPrivate Whether or not to set task to private
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	setPrivate: function (taskId, setToPrivate) {
		var task = Tasks.findOne(taskId);

		// Make sure only the task owner can make a task private
		if (task.owner !== Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		Tasks.update(taskId, { $set: { private: setToPrivate } });
	}

});
