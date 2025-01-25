const express = require("express");
const router = express.Router();
module.exports = router;

// const { authenticate } = require("./auth");
// router.use(authenticate);
// const prisma = require("../prisma");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// TODO: routes!
router.get("/", async (req, res, next) => {
  try {
    console.log("console");

    const product = await prisma.product.findMany();
    //console.log("Products fetched:", product);
    //console.log("Products jsonfetched:", JSON.stringify(product, null, 2));

    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
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
