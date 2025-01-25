const express = require("express");
const app = express();

module.exports = app;

// const prisma = require("./prisma");

// TODO: routes!
app.use("/products", require("../api/products"));
app.use("/orders", require("../api/orders"));
app.use(require("../api/auth").router);

//just some CLI info
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//amends at 4pm
// 404
app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
});
// Error-handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Sorry, something went wrong :(");
});
