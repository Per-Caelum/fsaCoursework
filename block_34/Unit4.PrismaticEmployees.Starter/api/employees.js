const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const out = "Welcome to the Prismatic Employees API.";
    res.json(out);
  } catch (e) {
    next(e);
  }
});

router.get("/employees", async (req, res, next) => {
  try {
    const out = await prisma.employees.findMany();
    res.json(out);
  } catch (e) {
    next(e);
  }
});

router.post("/employees", async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next({
      status: 400,
      message: "name must be provided for a new employee.",
    });
  }
  try {
    const employees = await prisma.employees.create({ data: { name } });
    res.status(201).json(employees);
  } catch (e) {
    next(e);
  }
});

router.get("/employees/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employees.findUnique({
      where: { id: Number(id) },
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (e) {
    next(e);
  }
});

router.put("/employees/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "Need a valid name" });
  }
  if (!employee) {
    return res.status(404).json({ message: "Could not find Employee" });
  }
  try {
    const employeeUpdate = await prisma.employees.update({
      where: { id: Number(id) },
      data: { name },
    });

    res.status(200).json({ employeeUpdate });
  } catch (e) {
    next(e);
  }
});

router.delete("employees/:id"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const employeeToDelete = await prisma.employees.findUnique({
        where: { id: Number(id) },
      });
      if (!employeeToDelete) {
        return res
          .status(404)
          .json({
            message: "Could not find Employee. Did you already delete?",
          });
      }

      await prisma.employees.delete({
        where: { id: Number(id) },
      });

      res.status(204).send();
    } catch (e) {
      res.status(500).json({ message: "Unexpected Error" });
    }
  };
