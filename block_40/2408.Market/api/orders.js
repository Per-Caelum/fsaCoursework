const express = require("express");
const router = express.Router();
module.exports = router;
const prisma = require("../prisma");
const { authenticate } = require("./auth");
router.use(authenticate);


router.get("/", authenticate, async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: { items: true },
    });
    res.json(orders);
  } catch (e) {
    next(e);
  }
});
router.post("/", authenticate, async (req, res, next) => {
  const { date, note, itemId } = req.body;
  const validItemId = Number(itemId);
  if (isNaN(validItemId)) {
    return res.status(400).json({ message: "Invalid item ID." });
  }
  if (!itemId) {
    return next({ status: 400, message: "Couldn't find order number." });
  }
  if (!date || !note) {
    return next({
      status: 400,
      message: "Must provide a proper date and note to proceed.",
    });
  }
  try {
    const order = await prisma.order.create({
      data: {
        date: +date,
        note: note || null,
        itemId: +itemId,
        userId: req.user.id,
      },
    });
    res.status(201).json(order);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  const includeProducts = req.user ? { where: { userId: req.user.id } } : false;
  try {
    const order = await prisma.order.findUniqueOrThrow({
      where: { id: +id },
      include: { products: includeProducts },
    });
    if (order.userId !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to view this order." });
    }
    res.json(order);
  } catch (e) {
    next(e);
  }
});
