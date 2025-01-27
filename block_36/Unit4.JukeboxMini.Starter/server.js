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

// morgan is logging middleware maintained by the Expressjs team
// see: https://expressjs.com/en/resources/middleware/morgan.html
// app.use(require("morgan")("dev"));

app.use(express.json());

app.use("/playlists", require("./api/playlists.js"));

app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Sorry, something broke :(");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
