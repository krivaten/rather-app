/**
 * Toastr helpers
 */
 var alerts = {}, messages = {};

 toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": true,
	"progressBar": false,
	"positionClass": "toast-top-right",
	"preventDuplicates": true,
	"onclick": null,
	"showMethod": "show",
	"hideMethod": "hide"
};

 alerts = {
 	error: function(message) {
 		toastr["error"](message, 'Error');
 	}
 }

 messages = {
 	general: {
 		listErrors: function(errors) {
 			var message;
 			if (!_.isArray(errors) || _.isEmpty(errors)) {
 				errors = [];

 				errors.push({
 					text: 'No errors.'
 				});
 			}

 			message = 'Please correct the following errors:';
 			message += '<ul>';

 			// Loop through errors to generate message
 			_.forEach(errors, function(item) {

 				if (_.isString(item)) {
 					message += '<li>' + item + '</li>';
 				} else if(_.isObject(item)) {
 					message += '<li>';
 					if (_.isPresent(item.title)) message += '<strong>' + item.title + ': </strong>';
 					if (_.isPresent(item.text)) message += item.text;
 					message += '</li>';
 				}

 			});

 			message += '</ul>';

 			alerts.error(message);
 		}
 	},
 	account: {
 		userNotFound: function() {
 			alerts.error('That user was not found. Please try again.');
 		},
 		incorrectPassword: function() {
 			alerts.error('Incorrect password. Please try again.')
 		},
 		resetPassword: function() {
 			alerts.error('Please check your email to reset your password.')
 		}
 	},

 	fields: {
 		username: {
 			title: 'Username',
 			text: 'Must not be blank'
 		},
 		name: {
 			title: 'Name',
 			text: 'Must not be blank',
 		},
 		bio: {
 			title: 'Bio',
 			text: 'Must not be blank'
 		},
 		email: {
 			title: 'Email',
 			text: 'Must not be blank'
 		},
 		password: {
 			title: 'Password',
 			text: 'Must not be blank'
 		}
 	}
 }
