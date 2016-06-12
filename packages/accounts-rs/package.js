Package.describe({
  summary: "Login service for Passaporte Rede Sustentabilidade accounts",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('rs', ['client', 'server']);

  api.addFiles('rs_login_button.css', 'client');

  api.addFiles("rs.js");
});
