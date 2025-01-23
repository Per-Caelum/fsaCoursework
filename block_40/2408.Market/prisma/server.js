const express = require("express");
const router = express.Router();
module.exports = router;

// const prisma = require("./prisma");

// TODO: routes!
app.use("/products", require("../api/products"));
app.use("/orders", require("../api/orders"));
app.use(require("../api/auth").router);
