var nav, tools;

/**
 * List of navigations
 *
 * @type {Object}
 * @since v0.1.0
 */
nav = {
	feed: [
		{title: 'Home', path: 'feedIndex'},
		{title: 'Popular', path: 'feedPopular'},
		{title: 'Sponsored', path: 'feedSponsored'}
	]
};

/**
 * Collection of routing tools
 *
 * @type {Object}
 * @since v0.1.0
 */
tools = {

	/**
	 * Determine whether or not the user is logged in, if not take them back to index
	 *
	 * @method isLoggedIn
	 * @param {Boolean} returnBoolean Whether or not to return a boolean value
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	isLoggedIn: function(returnBoolean) {
		var isLoggedIn = Meteor.user();

		if (returnBoolean) return isLoggedIn;

		if (!isLoggedIn) Router.go('index');
	},

	/**
	 * Setup the header to be displayed
	 *
	 * @method headerDefault
	 * @param {Object} context The current route's context
	 * @param {Boolean} btnBack Whether or not to display the back button
	 * @param {Array} nav Array of object containing navigation links and titles
	 * @return {Undefined}
	 * @since v0.1.0
	 */
	headerDefault: function(context, data) {
		context.render('header', {
			to: 'header',
			data: data
		});
	}

};

/**
 * Router Configuration
 */
 Router.configure({
 	layoutTemplate: 'layout',
 	loadingTemplate: 'loading',
 	notFoundTemplate: 'notFound'
 });

Router.route('index', {
	path: '/',
	action: function() {
		if (tools.isLoggedIn(true)) return Router.go('feed');

		this.render('index');
	}
});

/**
 * Info Routes
 * @since v0.1.0
 */
Router.route('infoTermsOfService', {
	path: '/info/terms-of-service',
	action: function() {
		tools.headerDefault(this, {
			btnBack: true,
			title: 'Terms'
		});

		this.render('infoTermsOfService');
	}
});

Router.route('infoFeedback', {
	path: '/info/feedBack',
	action: function() {
		tools.headerDefault(this, {
			btnBack: true,
			title: 'Feedback'
		});

		this.render('infoFeedback');
	}
});

Router.route('infoHelp', {
	path: '/info/help',
	action: function() {
		tools.headerDefault(this, {
			btnBack: true,
			title: 'Help'
		});

		this.render('infoHelp');
	}
});


/**
 * Account Routes
 * @since v0.1.0
 */
Router.route('account', {
	path: '/account',
	action: function() {
		Router.go('accountIndex');
	}
});

Router.route('accountIndex', {
	path: '/account/index',
	action: function() {

		// Ensure user is signed in
		tools.isLoggedIn();

		tools.headerDefault(this, {
			btnBack: true,
			title: 'Account'
		});

		this.render('accountIndex');
	}
});

Router.route('accountChangePassword', {
	path: '/account/change-password',
	action: function() {

		// Ensure user is signed in
		tools.isLoggedIn();

		tools.headerDefault(this, {
			btnBack: true
		});

		this.render('accountChangePassword');
	}
});

Router.route('accountResetPassword', {
	path: '/account/reset-password',
	action: function() {

		this.render('accountResetPassword');
	}
});

/**
 * Feed Routes
 * @since v0.1.0
 */
Router.route('feed', {
	path: '/feed',
	action: function() {
		Router.go('feedIndex');
	}
});

Router.route('feedIndex', {
	path: '/feed/index',
	action: function() {

		// Ensure user is signed in
		tools.isLoggedIn();

		tools.headerDefault(this, {
			nav: nav.feed
		});

		this.render('feedIndex');
	}
});

Router.route('feedPopular', {
	path: '/feed/popular',
	action: function() {

		// Ensure user is signed in
		tools.isLoggedIn();

		tools.headerDefault(this, {
			nav: nav.feed
		});

		this.render('feedPopular');
	}
});

Router.route('feedSponsored', {
	path: '/feed/sponsored',
	action: function() {

		// Ensure user is signed in
		tools.isLoggedIn();

		tools.headerDefault(this, {
			nav: nav.feed
		});

		this.render('feedSponsored');
	}
});
