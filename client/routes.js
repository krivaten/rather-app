/**
 * Router
 */
Router.configure({
	layoutTemplate: 'layoutPrimary'
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
	if (_.isObject(Meteor.user())) return Router.go('feed');

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
 * Feed Routes
 */
Router.route('feed', function () {

	// Make sure user is logged in
	if (!_.isObject(Meteor.user())) return Router.go('index');

	this.render('feedIndex');
});