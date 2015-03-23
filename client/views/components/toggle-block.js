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
		var toggleBlock, toggleContainer, toggleContent, toggleHeight;

		toggleBlock = $('[data-trigger="' + this.trigger + '"]');
		toggleContainer = toggleBlock.next('.toggle-block__container');
		toggleContent = toggleContainer.find('.toggle-block__content');

		toggleBlock.toggleClass('active');

		if (toggleBlock.hasClass('active')) toggleHeight = toggleContent.height();
		else toggleHeight = 0;

		toggleContainer.height(toggleHeight);
	}

});
