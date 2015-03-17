/**
 * Email configuration
 */
Accounts.emailTemplates.siteName = "Rather";
Accounts.emailTemplates.from = "Rather <accounts@bewm.com>";


Accounts.emailTemplates.resetPassword.subject = function (user) {
    return "Reset your Rather account password";
};
Accounts.emailTemplates.resetPassword.text = function (user, url) {
   return "So it looks like you forgot your password. Bummer. I guess we can't all be like Johannes Mallow.\n\n"
     + "Anyway, here is a link to reset your password. Cheers!\n\n"
     + url;
};
Accounts.emailTemplates.resetPassword.html = function (user, url) {
   return "So it looks like you forgot your password.<br /><br />"
     + "Bummer.<br /><br />"
     + "I guess we can't all be like Johannes Mallow.<br /><br />"
     + "Anyway, here is a link to reset your password.<br /><br />"
     + "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a><br /><br />"
     + "Cheers!<br />"
     + "<strong>Team Rather</strong>";
};
