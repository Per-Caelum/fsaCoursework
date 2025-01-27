const express = require("express");
const app = express();
const PORT = 3000;

// Custom middleware to force JSON parsing
const forceJsonParsing = (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    if (
      !req.headers["content-type"] ||
      req.headers["content-type"] !== "application/json"
    ) {
      req.headers["content-type"] = "application/json"; // Force JSON content type
    }
  }
  next();
};

app.use(forceJsonParsing);

app.use(express.json());

app.use("/employees", require("./api/employees"));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
