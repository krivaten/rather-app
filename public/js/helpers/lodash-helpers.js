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

lodashHelpers.isEmail = function(email) {
	var emailPattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	return (_.isPresent(email) && emailPattern.test(email));
}

_.mixin(lodashHelpers);
