const express = require("express");
const router = express.Router();
module.exports = router;
const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    // `id` has to be converted into a number before looking for it!
    const employee = await prisma.employee.findUnique({ where: { id: +id } });
    if (employee) {
      res.json(employee);
    } else {
      next({ status: 404, message: `employee with id ${id} does not exist.` });
    }
  } catch (e) {
    next(e);
  }
});

router.put("/:id", express.json(), async (req, res, next) => {
  console.log("This is the start of the PUT /:ID");
  console.log("req.body:", req.body);
  const { id } = req.params;
  const { name } = req.body;

  // Check if name was provided
  if (!name) {
    return next({
      status: 400,
      message: "A new name must be provided.",
    });
  }

  try {
    // Check if the employee exists
    const employee = await prisma.employee.findUnique({ where: { id: +id } });
    if (!employee) {
      return next({
        status: 404,
        message: `employee with id ${id} does not exist.`,
      });
    }

    // Update the employee
    const updatedemployee = await prisma.employee.update({
      where: { id: +id },
      data: { name },
    });
    res.json(updatedemployee);
  } catch (e) {
    next(e);
  }
});

router.post("/", express.json(), async (req, res, next) => {
  console.log("starrt of the POST");
  console.log("req.body:", req.body);
  const { name } = req.body;
  if (!name) {
    return next({
      status: 400,
      message: "name must be provided for a new employee.",
    });
  }
  try {
    const employee = await prisma.employee.create({ data: { name } });
    res.status(201).json(employee);
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    // Check if the employee exists
    const employee = await prisma.employee.findUnique({ where: { id: +id } });
    if (!employee) {
      return next({
        status: 404,
        message: `employee with id ${id} does not exist.`,
      });
    }

    // Delete the employee
    await prisma.employee.delete({ where: { id: +id } });
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});
