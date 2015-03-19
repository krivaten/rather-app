/**
 * Toggle block component
 */
Template.componentToggleBlock.events({

	/**
	 * Trigger toggle
	 *
	 * @since v0.1.0
	 */
	'click .toggle-block__btn': function () {
		var dataTrigger = $('[data-trigger="' + this.trigger + '"]');

		// Toggle the active class on this toggle block
		dataTrigger.toggleClass('active');
	}

});
