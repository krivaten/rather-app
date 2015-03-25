/**
 * Layout helpers
 */
Template.header.helpers({

	/**
	 * Determine if menu is visible
	 *
	 * @method menuVisible
	 * @return {Boolean} Whether or not menu is visible
	 * @since v0.1.0
	 */
	menuVisible: function() {
		return Session.get('menuVisible');
	}

});


/**
 * Header events
 */
Template.header.events({

	/**
	 * Go back
	 *
	 * @since v0.1.0
	*/
	'click [data-trigger="back"]': function(event, template) {
		window.history.back();
	},


	/**
	 * Show the drawer
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="drawer"]': function(event, template) {
		Session.set('menuVisible', false);
		Session.set('drawerVisible', true);
	},


	/**
	 * Show the menu
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="menu"]': function(event, template) {
		Session.set('drawerVisible', false);
		Session.set('menuVisible', true);
	},


	/**
	 * Open add poll
	 *
	 * @since v0.1.0
	 */
	'click [data-trigger="add"]': function(event, template) {
		Session.set('addVisible', true);
	}

});
