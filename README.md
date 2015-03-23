### Dependencies

This project has a few dependencies to get you up and running. Make sure the following things are installed on your system to ensure things are running properly:

- [Node](https://nodejs.org/) - It is best to install this first, since just about everything that follows depends on it.
- [Meteor](http://meteor.com/) - This can be installed via the terminal with `curl https://install.meteor.com/ | sh`.
- [Meteor Up](https://github.com/arunoda/meteor-up/) - This can be installed via the terminal with `npm install -g mup`.
- [Bower](http://bower.io/) - Once Node is installed, you should only need to enter `npm install -g bower` in your terminal.

### Basic Commands
- `meteor` - Serve the current app at http://localhost:3000 using Meteor's local development server.
- `meteor mongo` - Opens a MongoDB shell for viewing and/or manipulating collections stored in the database. Note that you must already be running a server for the current app (in another terminal window) in order for meteor mongo to connect to the app's database.
- `meteor add` - Add a package (or multiple packages) to your Meteor project. To query for available packages, use the `meteor search` command.
- `meteor remove` - Remove a package previously added to your Meteor project. For a list of the packages that your application is currently using, use the `meteor list` command.
- `meteor deploy rather.meteor.com` - Deploy app to Meteor's testing servers.
- `meteor run android-device --mobile-server rather.meteor.com` - Deploy app to Android platform utilizing Meteor's testing servers.

### Install Android dependencies
- `meteor install-sdk android`
- `meteor add-platform android`

### Standards

- Use camelCase for all paths. For example `layoutHeader`, or `partialFormSignUp`, etc.
- Make good comments! Doing so may mean that there is more comments than actual code, but it's worth it. For example:

```
/**
 * This function does something special
 *
 * @method somethingSpecial
 * @param {String} specialThing String to do something special to
 * @return {String} Specialized something
 * @since v0.0.1
 */
function somethingSpecial(specialThing) {
	return "I am special";
}
```
