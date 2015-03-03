### Install Meteor
Install the newest version of Meteor with one command on OS X or Linux. Open your terminal and type: `curl https://install.meteor.com/ | sh`

### Basic Commands
- `meteor` - Serve the current app at http://localhost:3000 using Meteor's local development server.
- `meteor mongo` - Opens a MongoDB shell for viewing and/or manipulating collections stored in the database. Note that you must already be running a server for the current app (in another terminal window) in order for meteor mongo to connect to the app's database.
- `meteor add` - Add a package (or multiple packages) to your Meteor project. To query for available packages, use the `meteor search` command.
- `meteor remove` - Remove a package previously added to your Meteor project. For a list of the packages that your application is currently using, use the `meteor list` command.

### Install Android dependencies
- `meteor install-sdk android`
- `meteor add-platform android`
- `meteor run android-device --mobile-server democio.meteor.com`

### Deploy to Meteor
`meteor deploy rather.meteor.com`

### Depdendencies
- `meteor-platform`
- `accounts-ui`
- `accounts-password`
- `accounts-twitter`
- `fourseven:scss`

### Standards

- User camelCase for all paths. For example `layoutHeader`, or `partialFormSignUp`, etc.
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
function somethingSpecial(specialThing) {}
```
