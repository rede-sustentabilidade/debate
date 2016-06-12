/*
Let's import all our files here.
*/

import "./callbacks.js"
import "./components.js"
import "./custom_fields.js"
import "./routes.jsx"

ServiceConfiguration.configurations.upsert(
  { service: "rs" },
  {
    $set: {
      clientId: "1292962797",
      loginStyle: "popup",
      secret: "75a730b58f5691de5522789070c319bc"
    }
  }
);
