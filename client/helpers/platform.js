/**
 * Get the platform of the user
 *
 * @method platform
 * @return {String} Platform
 * @since v0.1.0
 */
var platform = function() {
	var UA = navigator.userAgent;

	if (/iPad|iPhone|iPod/i.test(UA)) return 'os-ios';
	else if (/Android/i.test(UA)) return 'os-android';
	else return 'os-Android';
}

Template.registerHelper('platform', platform);

/**
 * Example:
 * {{platform}}
 */
