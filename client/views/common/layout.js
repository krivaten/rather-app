/**
 * Layout helpers
 */
Template.layout.helpers({

	/**
	 * Determine if menu is visible
	 *
	 * @method menuVisible
	 * @return {Boolean} Whether or not menu is visible
	 * @since v0.1.0
	 */
	menuVisible: function() {
		return Session.get('menuVisible');
	},


	/**
	 * Determine whether or not an input is focused
	 *
	 * @method inputFocus
	 * @return {Boolean} Whetehr of not input is focused
	 * @since v0.1.0
	 */
	inputFocus: function () {
		return Session.get('inputFocus');
	},


	/**
	 * Determine if drawer is visible
	 *
	 * @method drawerVisible
	 * @return {Boolean} Whether or not menu is visible
	 * @since v0.1.0
	 */
	drawerVisible: function() {
		return Session.get('drawerVisible');
	}

});


/**
 * Layout events
 */
Template.layout.events({

	/**
	 * Hide the menu on click
	 *
	 * @since v0.1.0
	 */
	'click .menu--visible': function(event, template) {
		Session.set('menuVisible', false);
	},


	/**
	 * Set inputFocus session variable as true on input:focus
	 *
	 * @since v0.1.0
	 */
	'focus input': function() {
		Session.set('inputFocus', true);
	},


	/**
	 * Set inputFocus session variable as false on input:blur
	 *
	 * @since v0.1.0
	 */
	'blur input': function() {
		Session.set('inputFocus', false);
	}
});
