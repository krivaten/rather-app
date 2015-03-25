Template.add.created = function () {
  this.titleLength = new ReactiveVar('100');
  this.titleLengthColor = new ReactiveVar('text-primary');
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

	titleLength: function () {
		return Template.instance().titleLength.get();
	},

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
	"click [data-trigger='close']": function(event) {
		Session.set('addVisible', false);
	},


	"keyup input[name='title']": function(event, template) {
		var remaining;

		remaining = 100 - event.target.value.length;

		template.titleLength.set(remaining);
		template.titleLengthColor.set(remaining > 15 ? 'text-primary' : 'text-secondary');
	}

});
