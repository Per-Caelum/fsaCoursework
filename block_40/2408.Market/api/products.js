const express = require("express");
const router = express.Router();
module.exports = router;

const { authenticate } = require("./auth");
router.use(authenticate);
const prisma = require("../prisma");

// TODO: routes!
router.get("/", async (req, res, next) => {
  try {
    console.log("console");

    const product = await prisma.products.findMany();
    console.log("Products fetched:", products);
    console.log("Products jsonfetched:", JSON.stringify(products, null, 2));

    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  const includeOrders = req.user ? { where: { userId: req.user.id } } : false;
  try {
    const product = await prisma.product.findUnique({
      where: { id: +id },
      include: { orders: includeOrders },
    });
    if (product) {
      res.json(product);
    } else {
      next({ status: 404, message: `Product id ${id} not found.` });
    }
  } catch (e) {
    next(e);
  }
});
//gets product if user logged in
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: +id },
    });
    if (product) {
      res.json(product);
    } else {
      next({ status: 404, message: `Product id ${id} not found.` });
    }
  } catch (e) {
    next(e);
  }
});
