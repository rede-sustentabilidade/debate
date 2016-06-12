Package.describe({
  summary: "Passaporte Rede Sustentabilidade OAuth flow",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Rs');

  api.addFiles(
    ['rs_configure.html', 'rs_configure.js'],
    'client');

  api.addFiles('rs_server.js', 'server');
  api.addFiles('rs_client.js', 'client');
});
