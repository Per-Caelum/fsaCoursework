// TODO: this file :)
const express = require("express");
const app = express();
const employees = require("./employees");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", async (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/random", async (req, res) => {
  const randIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randIndex];
  res.status(200).json(randomEmployee);
});

app.get("/employees/:id", async (req, res) => {
  console.log(req.params.id);
  const id = Number(req.params.id);
  const employee = employees.find((empl) => empl.id === id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.status(200).json(employee);
});

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}.`);
});
