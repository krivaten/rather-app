Template.add.created = function () {
  this.titleLength = new ReactiveVar('100');
  this.titleLengthColor = new ReactiveVar('text--primary');
};


/**
 * Add helpers
 */
Template.add.helpers({

	/**
	 * Determine if add is visible
	 *
	 * @method addVisible
	 * @return {Boolean} Whether or not add is visible
	 * @since v0.1.0
	 */
	addVisible: function() {
		return Session.get('addVisible');
	},


	/**
	 * Determine remaining length of title
	 *
	 * @method titleLength
	 * @return {Integer} Remaining characters allowed for title
	 * @since v0.1.0
	 */
	titleLength: function () {
		return Template.instance().titleLength.get();
	},


	/**
	 * Determine color of title length text
	 *
	 * @method titleLengthColor
	 * @return {String} Class name that determines text color
	 * @since v0.1.0
	 */
	titleLengthColor: function() {
		return Template.instance().titleLengthColor.get();
	}

});


/**
 * Add events
 */
Template.add.events({

	/**
	 * Close add poll
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="close"]': function(event, template) {
		Session.set('addVisible', false);
	},


	/**
	 * Update titleLength and titleLengthColor
	 *
	 * @since v0.1.0
	 */
	'keyup input[name="title"]': function(event, template) {
		var remaining;

		remaining = 100 - event.target.value.length;

		template.titleLength.set(remaining);
		template.titleLengthColor.set(remaining > 15 ? 'text--primary' : 'text--secondary');
	}

});
