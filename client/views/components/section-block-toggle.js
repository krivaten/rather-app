/**
 * Section block toggle component
 */
Template.componentSectionBlockToggle.events({

	/**
	 * Trigger toggle
	 *
	 * @since v0.1.0
	 */
	'click .section-block__btn': function () {
		var toggleBlock, toggleContainer, toggleContent, toggleHeight;

		toggleBlock = $('[data-trigger="' + this.trigger + '"]');
		toggleContainer = toggleBlock.next('.section-block-toggle__container');
		toggleContent = toggleContainer.find('.section-block-toggle__content');

		toggleBlock.toggleClass('active');

		if (toggleBlock.hasClass('active')) toggleHeight = toggleContent.height();
		else toggleHeight = 0;

		toggleContainer.height(toggleHeight);
	}

});
