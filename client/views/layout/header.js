Template.header.events({
	"click .hide-completed": function (event) {
		Session.set("hideCompleted", !Session.get("hideCompleted"));
	},

	"click .header---nav-left-toggle": function(event) {
		Session.set('drawerVisible', true);
	},

	"click .header---nav-right-toggle": function(event) {
		Session.set('navRightVisible', !Session.get('navRightVisible'));
	}
});

Template.header.helpers({

	/**
	 * Get the number of incomplete tasks
	 *
	 * @method incompleteCount
	 * @return {Number} Number of incomplete tasks
	 * @since v0.1.0
	 */
	incompleteCount: function () {
		return Tasks.find({checked: {$ne: true}}).count();
	},


	/**
	 * Get btnBack value
	 *
	 * @method btnBack
	 * @return {String} Value of btnBack option on route
	 * @since v0.1.0
	 */
	btnBack: function() {
		return Router.current().route.options.btnBack;
	},


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
