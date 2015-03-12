/**
 * Pluralize helper
 *
 * @method pluralize
 * @param {String} string String to pluralize
 * @return {String} Pluralized string
 * @since v0.1.0
 */
var pluralize = function(string) {
	var plural = string;

	if (_.isUndefined(string)) {
		return null;
	} else if (string !== 1) {
		if (_.endsWith(string, 's')) {
			plural = string + 'es';
		} else {
			plural = string + 's';
		}
	}

	return plural;
}

Template.registerHelper('pluralize', pluralize);

/**
 * Example:
 * {{pluralize "Apple"}}
 */
