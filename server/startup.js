/**
 * Meteor startup
 */
Meteor.startup(function() {

	// Update Twitter configuration
	Accounts.loginServiceConfiguration.remove({
		service: 'twitter'
	});
	Accounts.loginServiceConfiguration.insert({
		service: 'twitter',
		consumerKey: 'whsAlCJUIKT6niIeTzDoPv3Gr',
		secret: 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14'
	});

	// Update Facebook configuration
	Accounts.loginServiceConfiguration.remove({
		service: 'facebook'
	});
	Accounts.loginServiceConfiguration.insert({
		service: 'facebook',
		appId: '1558392507753480',
		secret: 'b5b26d0904667b7c98568f9af857656a',
		loginStyle: 'popup'
	});
});
