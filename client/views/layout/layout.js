Template.layout.events({

	/**
	 * Set inputFocus session variable as true on input:focus
	 *
	 * @return {undefined}
	 * @since v0.1.0
	 */
	'focus input': function() {
		Session.set('inputFocus', true);
	},


	/**
	 * Set inputFocus session variable as false on input:blur
	 *
	 * @return {undefined}
	 * @since v0.1.0
	 */
	'blur input': function() {
		Session.set('inputFocus', false);
	}
});

Template.layout.helpers({

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
