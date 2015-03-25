// In the client code, below everything else
Template.componentTask.helpers({
	isOwner: function () {
		return this.owner === Meteor.userId();
	}
});

Template.componentTask.events({

	/**
	 * Mark task as complete
	 *
	 * @since v0.1.0
	 */
	'click .task-complete': function () {
		// Set the checked property to the opposite of its current value
		Meteor.call("setChecked", this._id, !this.checked);
	},


	/**
	 * Delete task
	 *
	 * @since v0.1.0
	 */
	'click .task-delete': function () {
		Meteor.call("deleteTask", this._id);
	},


	/**
	 * Mark task as private
	 *
	 * @since v0.1.0
	 */
	'click .task-private': function () {
		Meteor.call("setPrivate", this._id, !this.private);
	}
});
