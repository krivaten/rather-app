Template.header.events({
	"click .header__nav-right a": function(event) {
		// Close right menu
		Session.set('menuVisible', false);

		return true;
	},

	"click .header--btn-back": function(event) {
		window.history.back();
	},

	"click .header--btn-drawer": function(event) {
		Session.set('menuVisible', false);
		Session.set('drawerVisible', true);
	},

	"click .header--btn-menu": function(event) {
		Session.set('drawerVisible', false);
		Session.set('menuVisible', true);
	}
});

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
