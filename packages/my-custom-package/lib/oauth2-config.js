ServiceConfiguration.configurations.upsert(
  { service: "rs" },
  {
    $set: {
      clientId: "111111111111111111111",
      loginStyle: "popup",
      secret: "75a730b58f5691de5522789070c319bc"
    }
  }
);
