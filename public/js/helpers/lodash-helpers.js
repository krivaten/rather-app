/**
 * Lodash helpers
 */
var lodashHelpers = {};

/**
 * Check to make sure a value is present
 *
 * @method isPresent
 * @param {Any} value Value to check for presence
 * @return {Boolean} [description]
 * @since v0.1.0
 */
lodashHelpers.isPresent = function(value) {
	return (!_.isUndefined(value) && !_.isNull(value));
};

_.mixin(lodashHelpers);
