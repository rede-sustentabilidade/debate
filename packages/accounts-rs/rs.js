Accounts.oauth.registerService('rs');

if (Meteor.isClient) {
  Meteor.loginWithRs = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    // Use Google's domain-specific login page if we want to restrict creation to
    // a particular email domain. (Don't use it if restrictCreationByEmailDomain
    // is a function.) Note that all this does is change Google's UI ---
    // accounts-base/accounts_server.js still checks server-side that the server
    // has the proper email address after the OAuth conversation.
    if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {
      options = _.extend({}, options || {});
      options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});
      options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Rs.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: _.map(
      // publish access token since it can be used from the client (if
      // transmitted over ssl or on
      // localhost). https://developers.google.com/accounts/docs/OAuth2UserAgent
      // refresh token probably shouldn't be sent down.
      Rs.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
      function (subfield) { return 'services.rs.' + subfield; }),

    forOtherUsers: _.map(
      // even with autopublish, no legitimate web app should be
      // publishing all users' emails
      _.without(Rs.whitelistedFields, 'email', 'verified_email'),
      function (subfield) { return 'services.rs.' + subfield; })
  });
}
