var feedNavigation = [
	{title: 'Home', path: 'feed'},
	{title: 'Popular', path: 'feed'},
	{title: 'Sponsored', path: 'feed'}
];

/**
 * Router
 */
Router.configure({
	layoutTemplate: 'layout'
});


Router.route('/', function () {

	// Redirect user to index
	Router.go('index');
});


/**
 * Home Route
 */
Router.route('index', function () {

	// Make sure user is logged out
	if (Meteor.userId()) return Router.go('feed');

	// Render the index page
	this.render('index');
});

Router.route('info/terms-of-service', {

		// Set btnBack
		btnBack: 'index'

	}, function () {

		// Render the index page
		this.render('infoTermsOfService');

	});


/**
 * Account Routes
 */
Router.route('account', function () {

	// Make sure user is logged in
	if (!_.isObject(Meteor.user())) return Router.go('index');

	this.render('accountIndex');
});


/**
 * Feed route
 * @since v0.1.0
 */
Router.route('feed', function () {

	// Redirect user to index
	Router.go('feed/index');
});


/**
 * Feed Index route
 */
Router.route('feed/index', function () {

		// Make sure user is logged in
		if (!_.isObject(Meteor.user())) return Router.go('index');

		this.render('headerNavigation', {
			to: 'nav',
			data: {
				navigation: feedNavigation
			}
		});
		this.render('feedIndex', {
			data: function() {
				return {
					test: true
				};
			}
		});
	});
