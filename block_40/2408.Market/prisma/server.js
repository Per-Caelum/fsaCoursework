const express = require("express");
const app = express();

module.exports = app;

// const prisma = require("./prisma");

// TODO: routes!
app.use("/products", require("../api/products.js"));
app.use("/orders", require("../api/orders"));
app.use(require("../api/auth").router);

//just some CLI info
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//amends at 4pm
