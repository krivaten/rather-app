/**
 * Client configuration
 */
Meteor.subscribe("tasks");

Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});
