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
		appId: 'whsAlCJUIKT6niIeTzDoPv3Gr',
		secret: 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14',
		loginStyle: 'popup'
	});
});
