/**
 * Meteor startup
 */
Meteor.startup(function() {
	var serverMode, mailURL, twitterConsumerKey, twitterSecret, facebookId, facebookSecret;

	switch (Meteor.absoluteUrl()) {

		// Production
		case ('http://ratherapp.com'):
			serverMode = 'production';
			break;

		// Test
		case ('http://rather.meteor.com'):
			serverMode = 'test';
			mailURL = 'smtp://postmaster%40sandbox373c80d5cce344dd88dfc412b97dfc78.mailgun.org:3789f6f3598031d264790789f3fb8c61@smtp.mailgun.org:587';
			twitterConsumerKey = 'whsAlCJUIKT6niIeTzDoPv3Gr';
			twitterSecret = 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14';
			facebookId = '1558392507753480';
			facebookSecret = 'b5b26d0904667b7c98568f9af857656a';
			break;

		// Development
		default:
			serverMode = 'development';
			mailURL = 'smtp://postmaster%40sandbox373c80d5cce344dd88dfc412b97dfc78.mailgun.org:3789f6f3598031d264790789f3fb8c61@smtp.mailgun.org:587';
			twitterConsumerKey = 'whsAlCJUIKT6niIeTzDoPv3Gr';
			twitterSecret = 'XrnQ6spiZKiw8knbEfExMCKESVRzDiEPDqGVz15LWZ8VHxdp14';
			facebookId = '1558392507753480';
			facebookSecret = 'b5b26d0904667b7c98568f9af857656a';
			break;
	}

	// Establish Mail url
	process.env.MAIL_URL = mailURL;

	// Update Twitter configuration
	Accounts.loginServiceConfiguration.remove({
		service: 'twitter'
	});

	Accounts.loginServiceConfiguration.insert({
		service: 'twitter',
		consumerKey: twitterConsumerKey,
		secret: twitterSecret
	});

	// Update Facebook configuration
	Accounts.loginServiceConfiguration.remove({
		service: 'facebook'
	});

	Accounts.loginServiceConfiguration.insert({
		service: 'facebook',
		appId: facebookId,
		secret: facebookSecret,
		loginStyle: 'popup'
	});
});
