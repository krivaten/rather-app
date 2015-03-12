Template.layoutTools.events({
	"click .overlay---nav-right-toggle": function(event) {
		Session.set('navRightVisible', false);
	},

	"click .drawer___trigger": function(event) {
		Session.set('drawerVisible', false);
	}
});

Template.layoutTools.helpers({

	/**
	 * Determine if menu is visible
	 *
	 * @method navRightVisible
	 * @return {Boolean} Whether or not menu is visible
	 * @since v0.1.0
	 */
	navRightVisible: function() {
		return Session.get('navRightVisible');
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
