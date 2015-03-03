/**
 * Meteor startup
 */
Meteor.startup(function() {
	Accounts.loginServiceConfiguration.remove({
		service : 'twitter'
	});

	Accounts.loginServiceConfiguration.insert({
		service     : 'twitter',
		consumerKey : 'whsAlCJUIKT6niIeTzDoPv3Gr',
		secret      : 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14'
	});
});
