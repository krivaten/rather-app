/**
 * Determine if active template is the passed value
 *
 * @method isActiveTemplate
 * @param {String} string Value to determine if active template
 * @return {Boolean} Whether or not the current route matches the passed route
 * @since v0.1.0
 */
var isActiveTemplate = function(template) {
	var currentRoute = Router.current();

	template = template.toLowerCase();

	return currentRoute && template === currentRoute.lookupTemplate().toLowerCase();
}

Template.registerHelper('isActiveTemplate', isActiveTemplate);

/**
 * Example:
 * {{isActiveTemplate "info/terms-of-service}}
 */
