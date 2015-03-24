/**
 * Drawer helpers
 */
Template.drawer.helpers({
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
 * Drawer events
 */
Template.drawer.events({

	/**
	 * Close the drawer
	 *
	 * @since v0.1.0
	 */
	'click .drawer__trigger, click .list__item--link': function(event) {
		// Close right menu
		Session.set('drawerVisible', false);

		return true;
	}
});
